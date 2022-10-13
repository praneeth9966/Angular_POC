import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UTAuthServiceService {

  constructor() { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  
}
