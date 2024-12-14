import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-repair',
  templateUrl: './product-repair.component.html',
  styleUrls: ['./product-repair.component.css']
})
export class ProductRepairComponent implements OnInit {
  productForm!: FormGroup;
  product!: Product;
  categories!: Category[];
  id!: string;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];

    this.productForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'category': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'desc': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.productService.getById(this.id).subscribe(data => {
      this.product = data as Product;
    });
    this.categoryService.getAll().subscribe(data => {
      this.categories = data as Category[];
    });
  }
  onSubmit() {
    if (this.productForm.invalid) {
      alert('Vui lòng nhập thông tin hợp lệ');
      return console.log('Không hợp lệ');
    } else {
      console.log(this.product);
      alert('Đã sửa sản phẩm thành công!');
      this.productService.repair(this.id, this.product).subscribe(data => {
        console.log(data);
        this.router.navigate(['product-list']);
      });
    }
  }


}


