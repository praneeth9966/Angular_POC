import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName = '';
  email: string;
  password: string;

  onSubmit(form: NgForm) {
    console.log(form.value);
    
    // if (form.valid) {
    //   console.log(form.value);
    // }
  }

}
