import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm: FormGroup;

  public statement: String = '';
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      username: ['', [Validators.required ,Validators.minLength(4), Validators.maxLength(20)]],
      password: ['', [Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.email]],
      emailConfirmation: ['', [Validators.email]],
    });
  }

  ngOnInit(): void {}
}
