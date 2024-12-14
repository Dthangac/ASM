import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  currentPage = 1;
  totalPages = 0;
  totalCategories = 0;
  searchTerm: string = '';

  constructor(private categoryService: CategoryService, private router: Router ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategoriesByPage(this.currentPage, this.searchTerm).subscribe(
      (data) => {
        this.categories = data.categories;
        this.totalPages = data.totalPages;
        this.currentPage = data.currentPage;
        this.totalCategories = data.totalCategories;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  searchCategories(event: any) {
    this.searchTerm = event.target.value;
    this.currentPage = 1; 
    this.loadCategories();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadCategories();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCategories();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCategories();
    }
  }

  deteleCategory(id: string) {
    var result = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
    if (result) {
      this.categoryService.delete(id).subscribe(data => {
        this.router.navigate(['category-list'])
          .then(() => {
            window.location.reload();
          });
      });
    }
  }
}
