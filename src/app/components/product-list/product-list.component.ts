import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentPage = 1;
  totalPages = 0;
  totalProducts = 0;
  searchTerm: string = '';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProductsByPage(this.currentPage, this.searchTerm).subscribe(
      (data) => {
        this.products = data.products;
        this.totalPages = data.totalPages;
        this.currentPage = data.currentPage;
        this.totalProducts = data.totalProducts;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  searchProducts(event: any) {
    this.searchTerm = event.target.value;
    this.currentPage = 1;//
    this.loadProducts();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadProducts();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProducts();
    }
  }

  deteleProduct(id: string) {
    var result = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
    if (result) {
      this.productService.delete(id).subscribe(data => {
        this.router.navigate(['product-list'])
          .then(() => {
            window.location.reload();
          });
      });
    }
  }
}
