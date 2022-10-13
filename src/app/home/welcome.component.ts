import { Component, OnInit, AfterContentChecked, OnChanges
, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterContentChecked, OnChanges, DoCheck, AfterContentInit, AfterViewInit
, AfterViewChecked, OnDestroy{

  constructor() {
    console.log('constructor calls');
  }

  ngOnChanges() {
    console.log('ngOnChanges calls');
  }

  ngOnInit(): void {
    console.log('ngOnInit calls');
  }
  
  ngDoCheck() {
    console.log('ngDoCheck calls');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit calls');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked calls');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit calls');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked calls');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy calls');
  }

  public pageTitle = 'Welcome';
  public name = '';
}
