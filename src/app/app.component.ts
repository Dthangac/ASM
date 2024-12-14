import { Component } from '@angular/core';




//meta data
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




//typescript class
export class AppComponent {
  title:string = 'Xin Chao Duc Thang';
  img_link:string ='https://tse3.mm.bing.net/th?id=OIP.QZAMp9WwR3rD_bE62JjG0wHaDL&pid=Api&P=0&h=220';
  content:string ='Xin chào các bạn, đây là Naruto';

  sayHello(){
    alert('Hello Thang') //tao 1 phuong thuc
  }
}
