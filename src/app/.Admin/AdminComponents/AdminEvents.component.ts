import { Component, OnInit } from "@angular/core";
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'AdminEvents',
  template: `

  <AdminHeader></AdminHeader>
    <div id='AuthContainer'>
        <ng-container *ngIf="login === true">
          <AdminLogin></AdminLogin>
        </ng-container>

        <ng-container *ngIf="loggedIn === true">
          <div id="AdminEvents">
            <div id="AdminEventsContainer">
              <div id="AdminEventsHeaderContainer">
                <h1 id="AdminEventsHeader">Admin Events</h1>
              </div>
              
            </div>
          </div>
        </ng-container>
      </div>
  <AdminFooter></AdminFooter>


    `,
  styles: [`

  `]
})

export class AdminEvents implements OnInit {
  login: boolean = true;
  loggedIn: boolean = false;
  Name: string = "";
  Password: string = "";

  constructor(private afAuth: Auth) {}

  ngOnInit() {this.isloggedIn();}

  isloggedIn() {
    const token = localStorage.getItem("admin");

    if (token) {
      this.Name = JSON.parse(localStorage.getItem("admin")!)['Name'];
      this.Password = JSON.parse(localStorage.getItem("admin")!)['Password'];
      this.loggedIn = true;
      this.login = false;
      console.log("logged in");
    } else {
      this.loggedIn = false;
    }
  }

  logOut() {
    this.afAuth.signOut();
    localStorage.removeItem("admin");
    localStorage.removeItem("loggedIn");
    this.loggedIn = false;
    this.login = true;
  }
}
