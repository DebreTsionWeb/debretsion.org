import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
    selector: "MemberBody",
    template: `
        <div id="MemberBody" class="fade-in">
          <div id="MemberBodyContainer">
            <div id="AuthContainer">
              <div id="Auth">

                <ng-container *ngIf="currentView === 'signup'">
                  <MemberSignup></MemberSignup>
                  <p>Already a member?</p>
                  <button (click)="switchToLogin()">Switch to Login</button>
                </ng-container>

                <ng-container *ngIf="currentView === 'login'">
                  <MemberLogin></MemberLogin>
                  <p>Not a member yet?</p>
                  <button (click)="switchToSignup()">Switch to Signup</button>
                </ng-container>

                <!-- <p id='LoggedIn'>Already signed in. Username</p> -->

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
            height: 90vh;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            /* animation: fade-in 1.5s ease-in-out; */
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
          height: 80%;
          flex-direction: column;
        }
        #AuthContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        #Auth {
          display: flex;
          position: relative;
          width: 90%;
          height: 100%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border: 1px solid black;
        }
        #DonateBodyContainer {
          display: flex;
          position: absolute;
          width: 99%;
          height: 450px;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
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
        @media (max-width: 700px) {
          #MemberBody {
            flex-direction: column;
            height: 150vh;
          }
          #MemberBodyContainer {
            width: 90%;
            height: 20%;
            text-align: center;
          }
          #MemberHeaderContainer {
            width: 100%;
            justify-content: center;
          }
          #MemberHeader{
            text-align: center;
          }
          #MemberBodyContainer {
            width: 90%;
            text-align: center;
          }
          #MemberHeaderContainer {
            height: 30%;
          }

        }

    `]
})
export class MemberBody implements OnInit, AfterViewInit {
  currentView: 'signup' | 'login';

  constructor() {
    this.currentView = "signup";
  }

  switchToLogin() {
    this.currentView = 'login';
  }

  switchToSignup() {
    this.currentView = 'signup';
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://assets.Member.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
