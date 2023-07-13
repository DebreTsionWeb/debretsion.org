import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "MemberLogin",
    template: `
    <div id="MemberLogin">
      <div id="MemberLoginContainer">
        <div id="MemberLoginHeaderContainer">
          <h1 id="MemberLoginHeader">Member Login</h1>
        </div>
        <div id="LoginInputContainer">
          <ng-container id="EmailContainer" *ngIf="email === true">
            <mat-form-field appearance="outline" id='EmailForm'>
              <mat-label>Email</mat-label>
              <input matInput id="Email" [(ngModel)]="emailValue" placeholder="Enter Email" required/>
            </mat-form-field>
            <button id='Switch' (click)="switchToPhone()">Switch to Phone Number</button>
          </ng-container>
          <ng-container id="PhoneContainer" *ngIf="phone === true">
            <mat-form-field appearance="outline" id='PhoneForm'>
              <mat-label>Phone Number</mat-label>
              <input matInput id="Phone" [(ngModel)]="phoneValue" placeholder="Enter Phone Number" required/>
            </mat-form-field>
            <button id='Switch' (click)="switchToEmail()">Switch to Email</button>
          </ng-container>
          <div id="PasswordContainer">
            <mat-form-field appearance="outline" id='PasswordForm'>
              <mat-label>Password</mat-label>
              <input matInput id="Password" [(ngModel)]="passwordValue" type="password" placeholder="Enter Password" required/>
            </mat-form-field>
          </div>
        </div>
        <div id="LoginErrorContainer">
          <p id="LoginError" #LoginError>Please Fill Out All Fields</p>
        </div>
        <div id="LoginButtonContainer">
          <button mat-raised-button color="primary" id="LoginButton" (click)="submitLogin()">Login</button>
        </div>
      </div>
    </div>

    `,
    styles: [`
        #MemberLogin {
          display: flex;
          position: relative;
          width: 600px;
          height: 100%;
          justify-content: center;
          align-items: center;
          z-index: 3;
        }
        #MemberLoginContainer {
            display: flex;
            position: relative;
            width: 90%;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }
        #MemberLoginHeaderContainer {
            display: flex;
            position: relative;
            width: 92%;
            height: 20%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        #MemberLoginHeader {
          display: flex;
          position: relative;
          font-size: 40px;
        }
        #LoginInputContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 5%;
        }
        #PhoneContainer, #EmailContainer, #PasswordContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          margin: 10px;
        }
        #PhoneForm, #EmailForm, #PasswordForm {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
        }
        #Phone, #Email, #Password {
          display: flex;
          position: relative;
          width: 100%;
          height: 30px;
          font-size: 15px;
          padding-left: 15px;
          padding-top: 20px;
        }
        #Switch {
          display: flex;
          position: relative;
          width: 100%;
          height: 50px;
          font-size: 15px;
          margin-top: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          font-family: 'InterSemi';
          border: none;
          background-color: transparent;
          color: blue;
          text-decoration: underline;
        }
        #LoginErrorContainer {
            display: flex;
            position: relative;
            margin-bottom: -2%;
        }
        #LoginError {
          display: none;
          position: relative;
          color: red;
          font-size: 16px;
          font-family: 'InterBold';
        }
        #LoginButtonContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 20%;
          justify-content: center;
          align-items: center;
          margin-top: 3%;
        }
        #LoginButton {
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
        #LoginButton:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
          opacity: 0.8;
        }
        @media (max-width: 700px) {
            #MemberLogin{
                width: 350px;
            }
            #MemberLoginContainer, #MemberLoginHeaderContainer{
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            #MemberLoginTextContainer {
                text-align: center;
            }
            #FirstName, #LastName{
                width: 85%;
            }
            #LoginButton {
                width: 60%;
            }
          }


    `]
})
export class MemberLogin implements OnInit{
  @ViewChild('LoginError', { static: false }) LoginErrorRef!: ElementRef;

  emailValue: string = '';
  passwordValue: string = '';
  phoneValue: string = '';
  email: boolean = true;
  phone: boolean = false;

  constructor() {}

  ngOnInit() {}

  switchToEmail() {
    this.phone = false;
    this.email = true;
  }

  switchToPhone() {
    this.phone = true;
    this.email = false;
  }

  submitLogin() {
    if (this.emailValue === '' || this.passwordValue === '') {
      this.LoginErrorRef.nativeElement.style.display = 'flex';

      setTimeout(() => {
        this.LoginErrorRef.nativeElement.style.display = 'none';
      }, 3000);
    } else {
      // this.afAuth.signInWithEmailAndPassword(this.emailValue, this.passwordValue)
      //   .then((userCredential) => {
      //     console.log('User signed in:', userCredential.user);
      //   })
      //   .catch((error) => {
      //     console.log('Sign-in error:', error);
      //   });
    }
  }
}
