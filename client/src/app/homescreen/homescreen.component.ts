import { UserModel } from '../models/userModel';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';





@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  private UserModel:UserModel
 
  loggedIn :boolean = false


  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {

  }

  OnSubmit(user):void{
    this.auth.loginUser(user)
    .subscribe()
    if(user){
      this.loggedIn = true;
      alert('logged in successfully')}
      if(!user){
        alert('Wrong credentials')
      }
    
    }
  
  }
  
  

