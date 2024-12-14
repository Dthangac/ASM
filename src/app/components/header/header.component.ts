import { Component, OnInit }  from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { CategoryService } from "../../services/category.service";
import { Category } from "src/app/models/category";
import { Router } from "@angular/router";
//meta data k can ;
@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit{
  isLogin: any;
  isADM: any;
  categories!: Category[];
  keyword!: string;



  constructor(private auth: AuthService, private router: Router, private categoryService: CategoryService) {
    this.isLogin = this.auth.checkLogin()
    this.isADM = this.auth.checkAdmin()
  }




  ngOnInit() {
    return this.categoryService.getAll().subscribe(data => {
      this.categories = data as Category[];
      console.log(this.categories);
    },error => {
      console.log(error.message);
    })
  }

  onLogout() {
    localStorage.clear()
    location.assign('/')
  }

  searchProducts(event: any) {
    const searchTerm = event.target.value;
    this.router.navigate(['shop'], { queryParams: { search: searchTerm } });
  }


}

