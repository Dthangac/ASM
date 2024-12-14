import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Category } from "../models/category";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class CategoryService {
  private url = 'http://localhost:8000/v1';
  pageSize = 2;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getAll(){
    return this.httpClient.get(`${this.url}/category`);
  }
  save(category: Category) {
    return this.httpClient.post(`${this.url}/category`, category); // Thêm danh mục
  }
  repair(id: string, category: Category) {
    return this.httpClient.put(`${this.url}/category/${id}`, category); // Cập nhật danh mục
  }
  delete(id: string) {
    return this.httpClient.delete(`${this.url}/category/${id}`);
  }
  getById(id: string) {
    return this.httpClient.get(`${this.url}/category/${id}`); // Lấy danh mục theo id
  }

  // Tìm kiếm danh mục theo tên
  searchCategories(searchTerm: string): Observable<any> {
    return this.httpClient.get(`${this.url}/category`).pipe(
      map((categories: any) => {
        return categories.filter((category: any) =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }

  // Phân trang danh mục
  getCategoriesByPage(page: number, searchTerm: string = ''): Observable<any> {
    return this.httpClient.get(`${this.url}/category`).pipe(
      map((categories: any) => {
        let filteredCategories = categories;

        if (searchTerm) {
          filteredCategories = categories.filter((category: any) =>
            category.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        const startIndex = (page - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        const paginatedCategories = filteredCategories.slice(startIndex, endIndex);

        return {
          categories: paginatedCategories,
          totalPages: Math.ceil(filteredCategories.length / this.pageSize),
          currentPage: page,
          totalCategories: filteredCategories.length
        };
      })
    );
  }
}
