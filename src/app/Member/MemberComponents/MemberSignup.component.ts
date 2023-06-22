import { Component, OnInit } from "@angular/core";

@Component({
    selector: "MemberSignup",
    template: `
        <div id="MemberSignup" class="fade-in">
            <div id="MemberSignupContainer">
                <div id="MemberSignupHeaderContainer">
                  <h1 id="MemberSignupHeader">Member Signup</h1>
                </div>
                <div id="SignupInputContainer">
                  <div id="NameContainer">
                    <div id="FirstNameContainer">
                        <input id='FirstName' (keyup)="setFirstName(firstValue)" placeholder="   Enter First Name" required/>
                    </div>
                    <div id="LastNameContainer">
                        <input id='LastName' (keyup)="setLastName(lastValue)" placeholder="   Enter Last Name" required/>
                    </div>
                  </div>
                  <div id="KristinaContainer">
                        <input id='Kristina' (keyup)="setKristinaName(kristinaValue)" placeholder="   Enter Kristina" required/>
                  </div>
                  <div id="EmailContainer">
                        <input id='Email' (keyup)="setEmailValue(emailValue)" placeholder="   Enter Email" required/>
                  </div>
                  <div id="PasswordContainer">
                        <input id='Password' (keyup)="setPasswordValue(passwordValue)" placeholder="   Enter Password" required/>
                  </div>
              </div>
              <div id="SignupButtonContainer">
                  <button id="SignupButton" (click)="submitSignup()"><b>Sign Up</b></button>
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
          animation: fade-in 2.5s ease-in-out;
          z-index: 3;
          border: 1px solid red;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            right: 50px;
          }
          100% {
            opacity: 1;
            right: 0;
          }
        }
        #MemberSignupContainer {
            display: flex;
            position: relative;
            width: 90%;
            height: 90%;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }
        #MemberSignupHeaderContainer {
            display: flex;
            position: relative;
            width: 92%;
            height: 10%;
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
          border: 1px solid green;
        }
        #NameContainer {
          display: flex;
          position: relative;
          flex-direction: row;
          width: 95%;
          justify-content: space-between;
          align-items: center;
          margin: 10px;
          border: 1px solid blue;
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
          width: 240px;
          height: 50px;
          border-radius: 20px;
        }
        #Kristina, #Email, #Password {
          display: flex;
          position: relative;
          width: 100%;
          height: 50px;
          border-radius: 20px;
        }
        #SignupButtonContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          margin-top: 5%;
          border: 1px solid yellow;
        }
        #SignupButton {
          display: flex;
          position: relative;
          width: 30%;
          height: 100%;
          border-radius: 20px;
          justify-content: center;
          align-items: center;
          font-size: 20px;
        }
        #SignupButton:hover {
            opacity: 0.8;
        }
        @media (max-width: 700px) {
            #MemberSignup{
                flex-direction: column;
            }
            #MemberSignupContainer, #MemberSignupHeaderContainer{
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            #MemberSignupTextContainer {
                text-align: center;
            }
          }
    `]
})
export class MemberSignup implements OnInit{


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
        console.log('Signup successful!');
      } else {
        console.log('Please fill out all the fields.');
      }
    }

    constructor() {}
    ngOnInit() {}
}
