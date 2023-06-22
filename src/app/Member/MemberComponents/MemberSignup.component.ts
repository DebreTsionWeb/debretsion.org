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
                        <input type="text" id='FirstName'/>
                    </div>
                    <div id="LastNameContainer">
                        <input type="text" id='LastName' />
                    </div>
                  </div>
                  <div id="KristinaContainer">

                  </div>
                  <div id="EmailContainer">

                  </div>
                  <div id="PasswordContainer">

                  </div>
                <div id="SignupButtonContainer">
                  <button id="SignupButton">Sign Up</button>
                </div>
              </div>
            </div>
         </div>

    `,
    styles: [`
        #MemberSignup {
          display: flex;
          position: relative;
          width: 100%;
          height: 90vh;
          flex-direction: row;
          justify-content: center;
          animation: fade-in 2.5s ease-in-out;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        #MemberSignupContainer {
            display: flex;
            position: relative;
            width: 60%;
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
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
        #MemberSignupHeader {

        }
        #SignupInputContainer {

        }
        #NameContainer {

        }
        #KristinaContainer {

        }
        #EmailContainer {

        }
        #PasswordContainer {

        }
        #MemberSignupTextContainer {

        }
        #MemberSignupText {

        }
        #MemberSignupButtonContainer {

        }
        #MemberSignupButton {

        }
        #MemberSignupButton:hover {

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
    constructor() {}
    ngOnInit() {}
}
