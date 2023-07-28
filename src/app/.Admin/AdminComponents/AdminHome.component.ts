import { Component, OnInit } from "@angular/core";
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'AdminHome',
  template: `


    <div id='AuthContainer'>
        <ng-container *ngIf="login === true">
          <AdminLogin></AdminLogin>
        </ng-container>

        <ng-container *ngIf="loggedIn === true">
          <AdminHeader></AdminHeader>
          <div id='AdminHome'>
            <div id="AdminHomeContainer">
              <p id='HomeText'>Go to
                <a id='Cloudinary' href='https://console.cloudinary.com/console/c-d201f2e8822a2a98c87f8a8b5a27b9/media_library/search?q=' target='blank'>Cloudinary</a> or
                <a id='Cloudinary' href='https://console.firebase.google.com/project/debretsionweb/storage/debretsionweb.appspot.com/files' target='blank'>Firebase</a>
                cloud storage to upload new photos. <br>
                Click the three dots on your uploaded image and click copy url to get the image url. <br>
                Then use those image urls when creating a new event or gallery. <br> <br>
                Cloudinary Login: debretsionkidistmariamwekidusg@gmail.com Pw: {{ Password }}
              </p>
            </div>
          </div>
          <AdminFooter></AdminFooter>
        </ng-container>
      </div>



    `,
  styles: [`
    #AuthContainer {
      display: flex;
      position: relative;
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    #AdminHome {
      display: flex;
      position: relative;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    #HomeText {
      text-align: center;
    }
  `]
})

export class AdminHome implements OnInit {
  login: boolean = true;
  loggedIn: boolean = false;
  Name: string = "";
  Password: string = "";

  constructor(private afAuth: Auth) {}

  ngOnInit() {this.isloggedIn();}

  isloggedIn() {
    const token = localStorage.getItem("admin");

    if (token) {
      this.Name = JSON.parse(localStorage.getItem("admin")!)['Name'];
      this.Password = JSON.parse(localStorage.getItem("admin")!)['Password'];
      this.loggedIn = true;
      this.login = false;
      console.log("logged in");
    } else {
      this.loggedIn = false;
    }
  }

  logOut() {
    this.afAuth.signOut();
    localStorage.removeItem("admin");
    localStorage.removeItem("loggedIn");
    this.loggedIn = false;
    this.login = true;
  }
}

