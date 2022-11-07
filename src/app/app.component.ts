import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { isValidUser } from 'src/store/products.actions';
import { isValidUserDetails } from 'src/store/products.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pageTitle = 'Acme Product Management';
  isUserValid: boolean;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.getValidUserListener();
  }

  getValidUserListener() {
    this.store
      .select(isValidUserDetails)
      // .pipe(filter((data) => !!data.isValidUser))
      .subscribe((data) => {
        console.log('isUserValid: ', data);
        this.isUserValid = data;
        // console.log('isUserValid: ', this.isUserValid);
      });
  }

  redirectToLogin() {
    this.store.dispatch(isValidUser({ userValid: false }));
    this.router.navigate(['/', 'login']);
  }
}
