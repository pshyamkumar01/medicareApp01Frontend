import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  
  msg = '';

  constructor(private userService : UserService,
              private router : Router) { }

  ngOnInit(): void {
  }

  submitRegister()
  {
    this.userService.userRegisterFromRemote(this.user).subscribe(
      data =>{
                console.log("Response Received");
                this.router.navigate(['/user-login']);
              },
      error =>{
                console.log("Exception occured");
                this.msg = "User withAlready Existed";
              }
    )
  }

  existingUserLogin()
  {
    this.router.navigate(['/user-login']);
  }
}
