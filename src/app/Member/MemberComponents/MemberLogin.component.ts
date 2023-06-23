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
                  <div id="EmailContainer">
                        <input id='Email' (keyup)="setEmailValue(emailValue)" placeholder="Enter Email" required/>
                  </div>
                  <div id="PasswordContainer">
                        <input id='Password' (keyup)="setPasswordValue(passwordValue)" placeholder="Enter Password" required/>
                  </div>
                </div>
                <div id="LoginErrorContainer">
                  <p id="LoginError" #LoginError>Please Fill Out All Fields</p>
                </div>
                <div id="LoginButtonContainer">
                  <button id="LoginButton" (click)="submitLogin()">Login</button>
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
        }
        #NameContainer {
          display: flex;
          position: relative;
          flex-direction: row;
          width: 95%;
          justify-content: space-between;
          align-items: center;
          margin: 10px;
        }
        #KristinaContainer, #EmailContainer, #PasswordContainer {
          display: flex;
          position: relative;
          width: 95%;
          margin: 10px;
        }
        #FirstName, #LastName{
          display: flex;
          position: relative;
          width: 230px;
          height: 50px;
          font-size: 15px;
          padding-left: 15px;
          border-radius: 20px;
        }
        #Kristina, #Email, #Password {
          display: flex;
          position: relative;
          width: 100%;
          height: 50px;
          font-size: 15px;
          padding-left: 15px;
          border-radius: 20px;
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
          height: 60px;
          border-radius: 35px;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          cursor: pointer;
          font-family: 'InterSemi';
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

    setEmailValue(emailValue: string) {
      console.log(emailValue);
      this.emailValue += emailValue;
    }
    setPasswordValue(passwordValue: string) {
      console.log(passwordValue);
      this.passwordValue += passwordValue;
    }

    submitLogin() {
      if (
        this.emailValue === '' ||
        this.passwordValue === ''
      ) {
        this.LoginErrorRef.nativeElement.style.display = 'flex';

    setTimeout(() => {
      this.LoginErrorRef.nativeElement.style.display = 'none';
    }, 3000);
      } else {

      }
    }

    constructor() {}
    ngOnInit() {}
}
