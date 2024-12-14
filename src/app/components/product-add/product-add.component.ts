import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
    this.product = new Product;

    this.productForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'desc': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(data => {
      console.log(this.categories);
      this.categories = data as Category[];
    });
  }

  onSubmit() {
    if (this.productForm.invalid) {
      alert('Vui lòng nhập thông tin hợp lệ');
      return console.log('Không hợp lệ');
    } else {
      console.log(this.product);
      alert('Đã thêm sản phẩm thành công!');
      this.productService.save(this.product).subscribe(data => {
        console.log(data);
        this.router.navigate(['product-list']);
      });
    }
  }

}
