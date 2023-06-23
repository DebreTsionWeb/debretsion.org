import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "MemberSignup",
    template: `
        <div id="MemberSignup">
            <div id="MemberSignupContainer">
                <div id="MemberSignupHeaderContainer">
                  <h1 id="MemberSignupHeader">Member Signup</h1>
                </div>
                <div id="SignupInputContainer">
                  <div id="NameContainer">
                    <div id="FirstNameContainer">
                        <input id='FirstName' (keyup)="setFirstName(firstValue)" placeholder="Enter First Name" required/>
                    </div>
                    <div id="LastNameContainer">
                        <input id='LastName' (keyup)="setLastName(lastValue)" placeholder="Enter Last Name" required/>
                    </div>
                  </div>
                  <div id="KristinaContainer">
                        <input id='Kristina' (keyup)="setKristinaName(kristinaValue)" placeholder="Enter Kristina Name" required/>
                  </div>
                  <div id="EmailContainer">
                        <input id='Email' (keyup)="setEmailValue(emailValue)" placeholder="Enter Email" required/>
                  </div>
                  <div id="PasswordContainer">
                        <input id='Password' (keyup)="setPasswordValue(passwordValue)" placeholder="Enter Password" required/>
                  </div>
                </div>
                <div id="SignupErrorContainer">
                  <p id="SignupError" #SignupError>Please Fill Out All Fields</p>
                </div>
                <div id="SignupButtonContainer">
                  <button id="SignupButton" (click)="submitSignup()">Sign Up</button>
                </div>
            </div>
         </div>

    `,
    styles: [`
        #MemberSignup {
          display: flex;
          position: relative;
          width: 600px;
          height: 100%;
          justify-content: center;
          align-items: center;
          z-index: 3;
        }
        #MemberSignupContainer {
            display: flex;
            position: relative;
            width: 90%;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #MemberSignupHeaderContainer {
            display: flex;
            position: relative;
            width: 92%;
            height: 20%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        #MemberSignupHeader {
          display: flex;
          position: relative;
          font-size: 40px;
        }
        #SignupInputContainer {
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
        #SignupErrorContainer {
            display: flex;
            position: relative;
            margin-bottom: -2%;
        }
        #SignupError {
          display: none;
          position: relative;
          color: red;
          font-size: 16px;
          font-family: 'InterBold';
        }
        #SignupButtonContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 20%;
          justify-content: center;
          align-items: center;
          margin-top: 3%;
        }
        #SignupButton {
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
        #SignupButton:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
          opacity: 0.8;
        }
        @media (max-width: 700px) {
            #MemberSignup{
                width: 350px;
            }
            #MemberSignupContainer, #MemberSignupHeaderContainer{
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            #MemberSignupTextContainer {
                text-align: center;
            }
            #FirstName, #LastName{
                width: 85%;
            }
            #SignupButton {
                width: 60%;
            }
          }


    `]
})
export class MemberSignup implements OnInit {

  @ViewChild('SignupError', { static: false }) signupErrorRef!: ElementRef;


    firstValue: string = '';
    lastValue: string = '';
    kristinaValue: string = '';
    emailValue: string = '';
    passwordValue: string = '';

    setFirstName(firstValue: string) {
      console.log(firstValue);
      this.firstValue += firstValue;
    }
    setLastName(lastValue: string) {
      console.log(lastValue);
      this.lastValue += lastValue;
    }
    setKristinaName(kristinaValue: string) {
      console.log(kristinaValue);
      this.kristinaValue += kristinaValue;
    }
    setEmailValue(emailValue: string) {
      console.log(emailValue);
      this.emailValue += emailValue;
    }
    setPasswordValue(passwordValue: string) {
      console.log(passwordValue);
      this.passwordValue += passwordValue;
    }

    submitSignup() {
      if (
        this.firstValue === '' ||
        this.lastValue === '' ||
        this.kristinaValue === '' ||
        this.emailValue === '' ||
        this.passwordValue === ''
      ) {
        this.signupErrorRef.nativeElement.style.display = 'flex';

    setTimeout(() => {
      this.signupErrorRef.nativeElement.style.display = 'none';
    }, 3000);
      } else {

      }
    }

    constructor() {}
    ngOnInit() {}
}
