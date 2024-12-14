import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // registerF!: FormGroup;
  loginF!: FormGroup;

  constructor(private authService: AuthService) {

    this.loginF = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    // this.registerF = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   fullname: new FormControl('', [Validators.required, this.fullNameValidator]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //   rePassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    // });

    // this.registerF.setValidators(this.passwordMatchValidator());
  }

  ngOnInit() {}

  // fullNameValidator(control: AbstractControl): ValidationErrors | null {
  //   const forbiddenWords = ['ma tuy', 'hang trang'];
  //   if (forbiddenWords.some(word => control.value.toLowerCase().includes(word))) {
  //       return { forbiddenWords: true };
  //     }
  //     return null;
  //   }

  // passwordMatchValidator(): ValidatorFn {
  //   return (form: AbstractControl): ValidationErrors | null => {
  //     const password = form.get('password')?.value;
  //     const confirmPassword = form.get('rePassword')?.value;
  //     if( password !== confirmPassword) {
  //       return { mismatch: true };
  //     } else {
  //       return null;
  //     }
  //   };
  // }

  // onRegister(): void {
  //   console.log(this.registerF.value);
  //   if (this.registerF.invalid) {
  //     console.log(this.registerF);
  //     alert('Vui lòng nhập hợp lệ');
  //     return console.log('Không hợp lệ');
  //   }
  //   this.authService.register(this.registerF.value).subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       alert('đăng kí thành công');
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }

  onLogin(): void {
    console.log(this.loginF.value);
    if(this.loginF.invalid) {
      console.log(this.loginF);
      alert('Vui lòng nhập hợp lệ');
      return console.log('Không hợp lệ');
    }
    this.authService.login(this.loginF.value).subscribe(
      (res: any) => {
        console.log(res);
        alert('Đăng nhập thành công');
        let jsonData = JSON.stringify(res);
        localStorage.setItem('user', jsonData);
        location.assign('/');
      },
      (error: any) => {
        console.error(error.error);
        alert('Sai tên đăng nhập hoặc mật khẩu');
      }
    );
  }
}
