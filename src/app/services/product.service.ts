import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:8000/v1';//url backend
  pageSize = 6;

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${this.url}/product`);
  }

  getById(id: string) {
    return this.httpClient.get(`${this.url}/product/${id}`);
  }

  save(product: Product) {
    return this.httpClient.post(`${this.url}/product`, product);
  }

  repair(id: string, product: Product) {
    return this.httpClient.put(`${this.url}/product/${id}`, product);
  }

  delete(id: string ) {
    return this.httpClient.delete(`${this.url}/product/${id}`);
  }

  searchProducts(searchTerm: string): Observable<any> {
    return this.httpClient.get(`${this.url}/product`).pipe( //lấy tất cả sản phẩm
      map((products: any) => {
        return products.filter((product: any) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }

  getProductsByPage(page: number, searchTerm: string = ''): Observable<any> {
    return this.httpClient.get(`${this.url}/product`).pipe( //lấy tất cả sản phẩm theo trang
      map((products: any) => {
        let filteredProducts = products;

        if (searchTerm) {
          filteredProducts = products.filter((product: any) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) //tìm kiếm sản phẩm theo tên
          );
        }

        const startIndex = (page - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        return {
          products: paginatedProducts,
          totalPages: Math.ceil(filteredProducts.length / this.pageSize),
          currentPage: page,
          totalProducts: filteredProducts.length
        };
      })
    );
  }
}
