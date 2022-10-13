import { Component, OnInit } from '@angular/core';
import {UTAuthServiceService} from "../ut-auth-service.service";

@Component({
  selector: 'app-ut-login',
  templateUrl: './ut-login.component.html',
  styleUrls: ['./ut-login.component.scss']
})
export class UTLoginComponent implements OnInit {

  constructor(private auth: UTAuthServiceService) { }

  ngOnInit(): void {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }

}
