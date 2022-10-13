import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UTLoginComponent } from './ut-login.component';
import {UTAuthServiceService} from "../ut-auth-service.service";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('UTLoginComponent', () => {
  let component: UTLoginComponent;
  let fixture: ComponentFixture<UTLoginComponent>;
  let service: UTAuthServiceService
  let spy: any;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UTLoginComponent ],
      providers: [
        UTAuthServiceService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UTLoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(UTAuthServiceService);
    el = fixture.debugElement.query(By.css('a'));
    // fixture.detectChanges();
  });

  afterEach(() => { 
    service = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('needsLogin returns true when the user has not been authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false); 
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled(); 

  });

  it('needsLogin returns false when the user has been authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('login button hidden when the user is authenticated', () => {
    // To being with Angular has not done any change detection so the content is blank.
    expect(el.nativeElement.textContent.trim()).toBe('');

    // Trigger change detection and this lets the template update to the initial value which is Login since by
    // default we are not authenticated
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    // Change the authetication state to true
    spyOn(service, 'isAuthenticated').and.returnValue(true);

    // The label is still Login! We need changeDetection to run and for angular to update the template.
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    // Which we can trigger via fixture.detectChange()
    fixture.detectChanges();

    // Now the label is Logout
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
});

});
