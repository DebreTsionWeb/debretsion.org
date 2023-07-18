import { Component, OnInit, ViewChild, ElementRef, inject } from "@angular/core";
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'AdminMember',
  template: `


    <div id='AuthContainer'>
        <ng-container *ngIf="login === true">
          <AdminLogin></AdminLogin>
        </ng-container>

        <ng-container *ngIf="loggedIn === true">
          <div id="AdminMember">
            <div id="AdminMemberContainer">
            <AdminHeader></AdminHeader>
              <p>hi</p>
            <AdminFooter></AdminFooter>
            </div>
          </div>
        </ng-container>

      </div>



    `,
  styles: [`
    #AuthContainer {
      display: flex;
      position: relative;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    #AdminMember {
      display: flex;
      position: relative;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `]
})

export class AdminMember implements OnInit {
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
