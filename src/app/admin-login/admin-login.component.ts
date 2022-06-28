import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Admin } from './../admin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin = new Admin();
  msg = "";

  constructor(private userService : UserService,
              private router : Router) { }

  ngOnInit(): void {
  }
  loginadmin()
  {
    this.userService.adminLoginFromRemote(this.admin).subscribe(
      data => {
                console.log("Response Received")
                this.router.navigate(['/admin-dashboard'])
              },
      error => {
                  console.log("Exception occured")
                  this.msg= "User Email or Password is not valid"
                }
      
    )
  }

}
