import { Component, OnInit, ViewChild, ElementRef, inject } from "@angular/core";
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';


@Component({
  selector: 'AdminLogin',
  template: `
    <div id='AuthContainer'>
        <ng-container *ngIf="login === true">
          <div id="AdminLogin">
            <div id="AdminLoginContainer">
              <div id="AdminLoginHeaderContainer">
                <p id="AdminLoginHeader">Admin Login</p>
              </div>
              <div id="LoginInputContainer">
                <ng-container id="NameContainer" >
                  <mat-form-field appearance="outline" id='NameForm'>
                    <mat-label>Name</mat-label>
                    <input matInput id="Name" [(ngModel)]="nameValue" placeholder="Enter Name" required/>
                  </mat-form-field>
                </ng-container>
                <div id="PasswordContainer">
                  <mat-form-field appearance="outline" id='PasswordForm'>
                    <mat-label>Password</mat-label>
                    <input matInput id="Password" [(ngModel)]="passwordValue" type='Password' placeholder="Enter Password" required/>
                  </mat-form-field>
                </div>
              </div>
              <div id="LoginErrorContainer">
                <p id="LoginError" #LoginError>Please Fill Out All Fields</p>
                <p id="AuthError" #AuthError>Invalid Credentials</p>
              </div>
              <div id="LoginButtonContainer">
                <button mat-raised-button id="LoginButton" (click)="submitLogin()">Login</button>
              </div>
            </div>
          </div>
        </ng-container>

        <ng-container *ngIf="login === false">
          <div id="LogoutScreen">
            <AdminHeader></AdminHeader>
              <div id="LogoutButtonContainer">
                <p id='LogoutText'>Hello Mr.Admin!</p>
                <button mat-raised-button id='LogoutButton' mat-raised-button (click)="logOut()">Logout</button>
              </div>
            <AdminFooter></AdminFooter>
          </div>
        </ng-container>
      </div>

    `,
  styles: [`
        #AuthContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #LogoutScreen {
          display: flex;
          position: relative;
          width: 100vw;
          height: 100vh;
          padding: 0;
          margin: 0;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #AdminLogin {
          display: flex;
          position: relative;
          width: 600px;
          height: 100%;
          justify-content: center;
          align-items: center;
          z-index: 3;
        }
        #AdminLoginContainer {
          display: flex;
          position: relative;
          width: 90%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #AdminLoginHeaderContainer {
          display: flex;
          position: relative;
          width: 92%;
          height: 20%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        #AdminLoginHeader {
          display: flex;
          position: relative;
          font-size: 40px;
        }
        #LoginInputContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 15%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 5%;
        }
        #PhoneContainer, #NameContainer, #PasswordContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          margin: 10px;
        }
        #PhoneForm, #NameForm, #PasswordForm {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
        }
        #Phone, #Name, #Password {
          display: flex;
          position: relative;
          width: 100%;
          height: 30px;
          font-size: 15px;
          padding-left: 15px;
          padding-top: 15px;
          padding-bottom: 15px;
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
        #LoginError, #AuthError {
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
          border-radius: 55px;
          background-color: #2978e6;
          color: white;
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

        #LogoutButtonContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        #LogoutButton {
          display: flex;
          position: relative;
          border: 1px solid black;
          border-radius: 55px;
          background-color: #2978e6;
          color: white;
          cursor: pointer;
        }
        #LogoutButton:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
          opacity: 0.8;
        }
        @media (max-width: 700px) {
            #AdminLogin{
                width: 350px;
            }
            #AdminLoginContainer, #AdminLoginHeaderContainer{
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            #AdminLoginTextContainer {
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

export class AdminLogin implements OnInit {
  @ViewChild('LoginError', { static: false }) LoginErrorRef!: ElementRef;
  @ViewChild('AuthError', { static: false }) AuthErrorRef!: ElementRef;
  private firestore: Firestore = inject(Firestore);

  nameValue: string = '';
  passwordValue: string = '';
  login: boolean = true;

  constructor(private afAuth: Auth) {}

  ngOnInit() {this.isloggedIn();}

  async submitLogin() {
    if (this.nameValue === '' || this.passwordValue === '') {
      this.LoginErrorRef.nativeElement.style.display = 'flex';
      setTimeout(() => {
        this.LoginErrorRef.nativeElement.style.display = 'none';
      }, 3000);
    } else {
      try {
        const AdminsCollection = collection(this.firestore, 'Admin');
        const querySnapshot = await getDocs(query(AdminsCollection, where('Name', '==', this.nameValue), where('Password', '==', this.passwordValue)));

        if (querySnapshot.empty) {
          this.AuthErrorRef.nativeElement.style.display = 'flex';
          setTimeout(() => {
            this.AuthErrorRef.nativeElement.style.display = 'none';
          }, 3000);
        } else {
          querySnapshot.forEach((doc) => {
            const Admin = doc.data();
            if (Admin) {
              localStorage.setItem('admin', JSON.stringify(Admin));
              localStorage.setItem('loggedIn', 'true');
              window.location.reload();
            }
          });
        }
      } catch (error) {
        console.log('Login failed:', error);
      }
    }
  }

  isloggedIn() {
    const token = localStorage.getItem("admin");

    if (token) {
      this.nameValue = JSON.parse(localStorage.getItem("admin")!)['Name'];
      this.passwordValue = JSON.parse(localStorage.getItem("admin")!)['Password'];
      this.login = false;
    } else {
      this.login = true;
    }
  }

  logOut() {
    this.afAuth.signOut();
    localStorage.removeItem("admin");
    localStorage.removeItem("loggedIn");
    this.login = true;
  }
}

