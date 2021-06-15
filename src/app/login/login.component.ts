import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  // OPP-877
  loginForm = this.fb.group({
    "username": [null, Validators.required],
    "password": [null, Validators.required],
  });

  onLogin() {
    this.router.navigate(["hello"]);
  }
}
