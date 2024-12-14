import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-repair',
  templateUrl: './category-repair.component.html',
  styleUrls: ['./category-repair.component.css']
})
export class CategoryRepairComponent implements OnInit {
  categoryForm!: FormGroup;
  category!: Category;
  id!: string;

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.categoryForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit() {
    this.categoryService.getById(this.id).subscribe(data => {
      this.category = data as Category;
    });
  }

  onSubmit() {
    if (this.categoryForm.invalid) {
      alert('Nhập vào thông tin hợp lệ');
      return console.log('Không hợp lệ');
    }
    else {
      console.log(this.category);
      alert('Đã sửa danh mục thành công!');
      this.categoryService.repair(this.id, this.category).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['category-list']);
      });
    }
  }
}
