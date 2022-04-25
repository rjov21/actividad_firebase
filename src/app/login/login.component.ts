import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { 

    this.loginForm = this.fb.group({
      username: '',
      password: ''
    })
  }
  
  ngOnInit(): void {
  }


  loginbtn(data: any){
    
  }
}
