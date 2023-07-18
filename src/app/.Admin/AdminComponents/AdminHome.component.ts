import { Component, OnInit } from "@angular/core";
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'AdminHome',
  template: `


    <div id='AuthContainer'>
        <ng-container *ngIf="login === true">
          <AdminLogin></AdminLogin>
        </ng-container>

        <ng-container *ngIf="loggedIn === true">
          <AdminHeader></AdminHeader>
          <div id='AdminHome'>
            <div id="AdminHomeContainer">
              <p>hi</p>
            </div>
          </div>
          <AdminFooter></AdminFooter>
        </ng-container>
      </div>



    `,
  styles: [`
    #AuthContainer {
      display: flex;
      position: relative;
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    #AdminHome {
      display: flex;
      position: relative;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `]
})

export class AdminHome implements OnInit {
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

