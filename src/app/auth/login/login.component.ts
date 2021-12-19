import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private usersService: UsersService, public router: Router) { }

  ngOnInit(): void {
    // this.checkLogin();
  }


  // users = [
  //   { "email": "gopal@gmail.com", "password": "12345" },
  //   { "email": "gopal1@gmail.com", "password": "1234" },
  //   { "email": "admin@gmail.com", "password": "0000" }
  // ];

  onSubmit() {
    var loginJson = JSON.stringify(this.form.value);
    this.usersService.loginCheck(loginJson)
      .subscribe((data => {
        if (data == true) {
          alert("Login successful");
          var jsonData = JSON.parse(loginJson);
          this.storeLogin(jsonData['email']);
          this.router.navigate(['/dashboard']);
        }
        else {
          alert("Invalid Login");
        }
      }))
  }

  // onSubmit() {
  //   var loginJson = JSON.stringify(this.form.value);
  //   console.log(loginJson);
  //   loginJson.get
  // }

  storeLogin(email) {
    sessionStorage.setItem("email", email);
  }
  checkLogin() {
    if (sessionStorage.length != 0) {
      this.router.navigate(['/']);
    }
  }
}
