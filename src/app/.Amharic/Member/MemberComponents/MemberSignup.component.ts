import { Component, OnInit, ViewChild, ElementRef, inject } from "@angular/core";
import { Firestore, collection, addDoc} from '@angular/fire/firestore';

@Component({
    selector: "AmharicMemberSignup",
    template: `
        <div id="MemberSignup">
      <div id="MemberSignupContainer">
        <div id="MemberSignupHeaderContainer">
          <p id="MemberSignupHeader">አባልነት Signup</p>
        </div>
        <div id="SignupInputContainer">
          <div id="NameContainer">
            <div id="FirstNameContainer">
              <mat-form-field appearance="outline" id='FirstNameForm'>
                <mat-label>First Name</mat-label>
                <input id='FirstName' matInput [(ngModel)]="firstValue" placeholder="Enter First Name" required>
              </mat-form-field>
            </div>
            <div id="LastNameContainer">
              <mat-form-field appearance="outline" id='LastNameForm'>
                <mat-label>Last Name</mat-label>
                <input id='LastName' matInput [(ngModel)]="lastValue" placeholder="Enter Last Name" required>
              </mat-form-field>
            </div>
          </div>
          <div id="KristinaContainer">
            <mat-form-field appearance="outline" id='KristinaForm'>
              <mat-label>Kristina Name</mat-label>
              <input id='Kristina' matInput [(ngModel)]="kristinaValue" placeholder="Enter Kristina Name" required>
            </mat-form-field>
          </div>
          <div id="PhoneContainer">
            <mat-form-field appearance="outline" id='PhoneForm'>
              <mat-label>Phone Number</mat-label>
              <input id='Phone' matInput [(ngModel)]="phoneValue" placeholder="Enter Phone Number" required>
            </mat-form-field>
          </div>
          <div id="EmailContainer">
            <mat-form-field appearance="outline" id='EmailForm'>
              <mat-label>Email</mat-label>
              <input id='Email' matInput [(ngModel)]="emailValue" placeholder="Enter Email" required>
            </mat-form-field>
          </div>
          <div id="PasswordContainer">
            <mat-form-field appearance="outline" id='PasswordForm'>
              <mat-label>Password</mat-label>
              <input id='Password' matInput [(ngModel)]="passwordValue" type='password' placeholder="Enter Password" required>
            </mat-form-field>
          </div>
        </div>
        <div id="SignupErrorContainer">
          <p id="SignupError" #SignupError>Please Fill Out All Fields</p>
        </div>
        <div id="SignupButtonContainer">
          <button mat-raised-button id='SignupButton' mat-raised-button   (click)="submitSignup()">Sign Up</button>
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
          height: 100%;
          justify-content: space-between;
          align-items: center;
          margin: 5px;
        }
        #KristinaContainer, #PhoneContainer, #EmailContainer, #PasswordContainer {
          display: flex;
          position: relative;
          width: 95%;
          height: 100%;
          margin: 5px;
        }
        #FirstNameContainer, #LastNameContainer {
          display: flex;
          position: relative;
          width: 45%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        #FirstNameForm, #LastNameForm {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
        }
        #FirstName, #LastName{
          display: flex;
          position: relative;
          width: 100%;
          height: 50px;
          font-size: 15px;
          padding-left: 15px;
        }
        #KristinaForm, #PhoneForm, #EmailForm, #PasswordForm {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
        }
        #Kristina, #Phone, #Email, #Password {
          display: flex;
          position: relative;
          width: 100%;
          height: 50px;
          font-size: 15px;
          padding-left: 15px;
        }
        #SignupErrorContainer {
            display: flex;
            position: relative;
            margin-top: -5px;
            margin-bottom: -5px;
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
          height: 55px;
          border-radius: 35px;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          cursor: pointer;
          font-family: 'InterSemi';
          border: 1px solid black;
        }
        #SignupButton:hover {
          transform: scale(1.01);
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
export class AmharicMemberSignup implements OnInit {

  @ViewChild('SignupError', { static: false }) signupErrorRef!: ElementRef;
  private firestore: Firestore = inject(Firestore);

  firstValue: string = '';
  lastValue: string = '';
  kristinaValue: string = '';
  phoneValue: string = '';
  emailValue: string = '';
  passwordValue: string = '';

  constructor() {}

  ngOnInit() {}

  submitSignup() {
    if (
      this.firstValue === '' ||
      this.lastValue === '' ||
      this.kristinaValue === '' ||
      this.phoneValue === '' ||
      this.emailValue === '' ||
      this.passwordValue === ''
    ) {
      this.signupErrorRef.nativeElement.style.display = 'flex';

      setTimeout(() => {
        this.signupErrorRef.nativeElement.style.display = 'none';
      }, 3000);
    } else {
      console.log('Signup submitted:', this.firstValue, this.lastValue, this.kristinaValue, this.phoneValue, this.emailValue, this.passwordValue);
      addDoc(collection(this.firestore, 'Members'), {
        firstValue: this.firstValue,
        lastValue: this.lastValue,
        kristinaValue: this.kristinaValue,
        phoneValue: this.phoneValue,
        emailValue: this.emailValue,
        passwordValue: this.passwordValue,
        Date: new Date()
      });
    }
  }
}
