import { Component, OnInit } from "@angular/core";
import { Auth } from '@angular/fire/auth';

@Component({
    selector: "AmharicMemberBody",
    template: `
        <div id="MemberBody">
          <div id="MemberBodyContainer">
            <div id="AuthContainer">
              <div id="Auth">

                <ng-container *ngIf="signup === true">
                  <AmharicMemberSignup></AmharicMemberSignup>
                  <div id="SwitchContainer">
                    <p id='SwitchQuestion'>Already a member?</p>
                    <button mat-raised-button id='SwitchButton' (click)="switchToLogin()">Login</button>
                  </div>
                </ng-container>

                <ng-container *ngIf="login === true">
                  <AmharicMemberLogin></AmharicMemberLogin>
                  <div id="SwitchContainer">
                    <p id='SwitchQuestion'>Not a member yet?</p>
                    <button mat-raised-button id='SwitchButton' (click)="switchToSignup()">Sign Up</button>
                  </div>
                </ng-container>

                <ng-container *ngIf="loggedIn === true">
                  <div id="LoggedInContainer">
                    <p id='LoggedIn'>Welcome Back {{ firstName }}! <br><br> Email: {{ email }} <br><br> Member Name: {{ firstName }} {{ lastName }} <br><br> Kristina Name: {{ kristina }}</p>
                  </div>
                  <button mat-raised-button id='LogoutButton' mat-raised-button (click)="logOut()">Logout</button>
                </ng-container>

              </div>
            </div>
          </div>
          <div id="DonateBodyContainer">
            <div id="DonateHeaderContainer">
              <p id="DonateHeader">ለግሱ</p>
            </div>
            <div id="DonateIconContainer">
              <div id="DonateIcon">
                <a href=""><img id='Zelle' src="assets/zelle.webp" alt=""></a>
                <a href=""><img id='Square' src="assets/square.jpg" alt=""></a>
              </div>
            </div>
          </div>
        </div>
    `,
    styles: [`
        #MemberBody {
            display: flex;
            position: relative;
            width: 100%;
            height: 115vh;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            z-index: 2;
        }
        @keyframes slide-in {
          0% {
            opacity: 0;
            right: 30px;
          }
          100% {
            opacity: 1;
            right: 0;
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        #MemberBodyContainer {
          display: flex;
          position: relative;
          width: 80%;
          height: 95%;
          flex-direction: column;
        }
        #AuthContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          animation: slide-in 1s ease-in-out;
        }
        #Auth {
          display: flex;
          position: relative;
          width: 90%;
          height: 100%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        #SwitchContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 20%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 4;
        }
        #SwitchQuestion {
          font-family: 'InterMedium';
        }
        #SwitchButton {
          display: flex;
          position: relative;
          width: 150px;
          height: 50px;
          justify-content: center;
          align-items: center;
          border-radius: 55px;
          background-color: #2978e6;
          color: white;
          font-size: 16px;
          cursor: pointer;
          font-family: 'InterSemi';
        }
        #SwitchButton:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
          opacity: 0.8;
        }
        #LoggedInContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 30%;
          justify-content: center;
          align-items: center;
        }
        #LoggedIn {
          text-align: center;
        }
        #LogoutButton {
          display: flex;
          position: relative;
          width: 40%;
          height: 55px;
          border-radius: 35px;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          cursor: pointer;
          font-family: 'InterSemi';
          border: 1px solid black;
        }
        #DonateBodyContainer {
          display: flex;
          position: absolute;
          width: 97%;
          height: 450px;
          margin-bottom: 5%;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          animation: fade-in 2s ease-in-out;
        }
        #DonateHeaderContainer {
          display: flex;
          position: relative;
          width: 15%;
          justify-content: center;
          text-align: center;
        }
        #DonateHeader {
          text-align: right;
          font-size: 35px;
          font-family: 'InterSemi';
        }
        #DonateIconContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
        }
        #DonateIcon {
          display: flex;
          position: relative;
          width: 15%;
          height: 100%;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        #Zelle, #Square {
            display: flex;
            position: relative;
            width: 100px;
        }
        #Zelle:hover, #Square:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
          opacity: 0.8;
        }
        @media (max-width: 850px) {
          #MemberBody {
            flex-direction: column;
            height: 120vh;
          }
          #MemberBodyContainer {
            width: 90%;
            height: 100%;
            margin-top: 10%;
            text-align: center;
          }
          #DonateBodyContainer{
            position: relative;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          #DonateIconContainer{
            justify-content: center;
            align-items: center;
            height: 50%;
          }
          #DonateIcon{
            width: 60%;
            flex-direction: row;
            justify-content: space-around;
          }

        }
    `]
})
export class AmharicMemberBody implements OnInit {

  signup: boolean = true;
  login: boolean = false;
  loggedIn: boolean = false;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  kristina: string = '';

  constructor(private afAuth: Auth) {}

  ngOnInit() {this.isloggedIn();}



  switchToLogin() {
    this.signup = false;
    this.login = true;
  }

  switchToSignup() {
    this.signup = true;
    this.login = false;
  }

  async isloggedIn() {
    const token = localStorage.getItem("user");

    if (token) {
      this.loggedIn = true;
      this.login = false;
      this.signup = false;
      console.log("logged in");
      this.firstName = JSON.parse(localStorage.getItem("user")!)['FirstName'];
      this.lastName = JSON.parse(localStorage.getItem("user")!)['LastName'];
      this.email = JSON.parse(localStorage.getItem("user")!)['Email'];
      this.kristina = JSON.parse(localStorage.getItem("user")!)['Kristina'];

    } else {
      this.loggedIn = false;
    }
  }

  logOut() {
    this.afAuth.signOut();
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");
    this.loggedIn = false;
    this.login = false;
    this.signup = true;
  }
}
