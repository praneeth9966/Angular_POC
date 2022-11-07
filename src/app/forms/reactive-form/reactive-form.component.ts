import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password-validator';
import { RegistrationServiceService } from 'src/app/forms/registration-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationServiceService
  ) {}

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        userName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        subscribe: [false],
        password: [],
        confirmPassword: [],
      },
      { validator: PasswordValidator }
    );

    // below code is for conditional validation
    // this.registrationForm.get('subscribe').valueChanges
    // .subscribe(checkedValue => {
    //   const email = this.registrationForm.get('email');
    //   if (checkedValue) {
    //     email.setValidators(Validators.required);
    //   } else {
    //     email.clearValidators();
    //   }
    //   email.updateValueAndValidity();
    // });

    // this.registrationForm = new FormGroup({
    //   userName: new FormControl('Praneeth'),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl('')
    // });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.registrationService
      .register(this.registrationForm.value)
      .subscribe((response) => {
        console.log('Success', response),
          (error) => console.log('Error', error);
      });
  }

  loadApiData() {
    // using setValue() method we have to provide all formcontrollers in formgroup compulsarly
    // this.registrationForm.setValue({
    //   userName: "Praneeth Kunapareddy",
    //   password: "test",
    //   confirmPassword: "test"
    // })

    // using patchValue() method we can change one or more than mone formcontrollers in formgroup
    this.registrationForm.patchValue({
      userName: 'Praneeth Kunapareddy',
      password: '',
      confirmPassword: '',
    });
  }
}
