import { TestBed } from '@angular/core/testing';

import { UTAuthServiceService } from './ut-auth-service.service';

describe('UTAuthServiceService', () => {
  let service: UTAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UTAuthServiceService);
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token')
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true from isAuthenticated when there is a token', () => { 
    localStorage.setItem('token', '1234'); 
    expect(service.isAuthenticated()).toBeTruthy(); 
  });

  it('should return false from isAuthenticated when there is no token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });

});
