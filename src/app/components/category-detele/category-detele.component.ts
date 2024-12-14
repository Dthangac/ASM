import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-category-detele',
  templateUrl: './category-detele.component.html',
  styleUrls: ['./category-detele.component.css'],
})
export class CategoryDeteleComponent implements OnInit {
  id: string = '';
  category: Category = new Category();
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    // Lấy id từ URL parameters thay vì query parameters
    this.id = this.route.snapshot.paramMap.get('id') || '';
    console.log('ID từ URL:', this.id);
  }
  onDelete() {
    if (!this.id) {
      alert('Không có ID danh mục để xóa');
      return;
    }
    if (confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
      this.categoryService.delete(this.id).subscribe({
        next: (data) => {
          alert('Xóa danh mục thành công');
          this.router.navigate(['/category']);
        },
        error: (error) => {
          alert('Lỗi khi xóa danh mục: ' + error);
          console.error('Lỗi xóa danh mục:', error);
        }
      });
    }
  }
}
