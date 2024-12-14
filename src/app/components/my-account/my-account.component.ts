import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  user: any;
  orders: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.checkLogin();
    this.orders = this.authService.getOrders();
  }



}
