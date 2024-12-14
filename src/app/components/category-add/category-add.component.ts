import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryForm: FormGroup;
  category: Category;

  constructor(private categoryService: CategoryService, private router: Router) {
    this.category = new Category();
    this.categoryForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.categoryForm.invalid) {
      alert('Nhập vào form hợp lệ');
      return console.log('Invalid form');
    } else {
      console.log(this.category);
      alert('Đã thêm danh mục thành công!');
      this.categoryService.save(this.category).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['category-list']);
      });
    }
  }

}
