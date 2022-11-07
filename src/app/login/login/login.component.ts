import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { SignUp } from 'src/store/app.state';
import { isValidUser, signInDetails } from 'src/store/products.actions';
import { selectSignInDetails } from 'src/store/products.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signInDetails: SignUp[];
  inValidUser: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(signInDetails());
    this.getSignInDetailsListener();

    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const loginFormDetails = this.loginForm.value;
    const isLogInValid = this.signInDetails.some((user) =>
      loginFormDetails.userName === user.userName &&
      loginFormDetails.password === user.password
        ? true
        : false
    );
    console.log('isLogInValid: ', isLogInValid);
    if (isLogInValid) {
      this.store.dispatch(isValidUser({ userValid: true }));
      this.router.navigate(['/', 'products']);
    } else {
      this.inValidUser = true;
      this.store.dispatch(isValidUser({ userValid: false }));
    }
  }

  getSignInDetailsListener() {
    this.store
      .select(selectSignInDetails)
      .pipe(filter((data) => !!data.length))
      .subscribe((data) => {
        this.signInDetails = data;
        console.log('signInDetails: ', this.signInDetails);
      });
  }
}
