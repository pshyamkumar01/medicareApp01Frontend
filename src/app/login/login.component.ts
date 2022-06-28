import { Admin } from './../admin';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  
  msg = '';
  constructor(private userService : UserService,
              private router : Router) { }

  ngOnInit(): void {
  }

  loginuser()
  {
    this.userService.userLoginFromRemote(this.user).subscribe(
      data => {
                console.log("Response Received")
                this.router.navigate(['/user-dashboard'])
              },
      error => {
                  console.log("Exception occured")
                  this.msg = "User Email or Password is not valid"
                }
    )
  }
  loginadmin()
  {
    this.router.navigate(['/admin-login']);
  }


  newUserRegistration()
  {
    this.router.navigate(['/new-user-registration'])
  }

}
