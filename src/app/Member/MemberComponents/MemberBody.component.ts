import { Component, OnInit } from "@angular/core";

@Component({
    selector: "MemberBody",
    template: `
        <div id="MemberBody">
          <div id="MemberBodyContainer">
            <div id="AuthContainer">
              <div id="Auth">

                <ng-container *ngIf="signup === true">
                  <MemberSignup></MemberSignup>
                  <div id="SwitchContainer">
                    <p id='SwitchQuestion'>Already a member?</p>
                    <button id='SwitchButton' (click)="switchToLogin()">Login</button>
                  </div>
                </ng-container>

                <ng-container *ngIf="login === true">
                  <MemberLogin></MemberLogin>
                  <div id="SwitchContainer">
                    <p id='SwitchQuestion'>Not a member yet?</p>
                    <button id='SwitchButton' (click)="switchToSignup()">Sign Up</button>
                  </div>
                </ng-container>

                <ng-container *ngIf="loggedIn === true">
                  <p id='LoggedIn'>Already signed in. Username</p>
                  <button id='LogoutButton' mat-raised-button (click)="logOut()">Logout</button>
                </ng-container>

              </div>
            </div>
          </div>
          <div id="DonateBodyContainer">
            <div id="DonateHeaderContainer">
              <p id="DonateHeader">Donate</p>
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
            height: 95vh;
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
          /* animation: slide-in 0.1s ease-in-out; */
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
          border-radius: 30% / 100%;
          font-size: 16px;
          cursor: pointer;
          font-family: 'InterSemi';
        }
        #SwitchButton:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
          opacity: 0.8;
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
            height: 110vh;
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
export class MemberBody implements OnInit {

  signup: boolean = true;
  login: boolean = false;
  loggedIn: boolean = false;

  constructor() {}

  ngOnInit() {}

  switchToLogin() {
    this.signup = false;
    this.login = true;
  }

  switchToSignup() {
    this.signup = true;
    this.login = false;
  }

  isloggedIn() {
    this.loggedIn = true;
  }

  logOut() {}
}
