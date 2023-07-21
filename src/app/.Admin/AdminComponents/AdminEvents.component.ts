import { Component, OnInit, ViewChild, ElementRef, inject } from "@angular/core";
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';


@Component({
  selector: 'AdminEvents',
  template: `
      <div id='AuthContainer'>

        <ng-container *ngIf="login === true">
          <AdminLogin></AdminLogin>
        </ng-container>

        <ng-container *ngIf="loggedIn === true">
         <AdminHeader></AdminHeader>
         <div id="AdminEvents">
            <div id="AdminEventsContainer">
              <div id="CreateEventContainer">
                <div id="AdminEventsHeaderContainer">
                  <p id="AdminEventsHeader">Admin Events</p>
                </div>
                <div id="CreateEventForm">
                  <div id="CreateEventTitleContainer">
                    <input id='CreateEventTitle' matInput [(ngModel)]="Title" placeholder="Enter Event Title" required>
                  </div>
                  <div id="CreateEventDescContainer">
                    <input id='CreateEventDesc' matInput [(ngModel)]="Desc" placeholder="Enter Event Desc" required>
                  </div>
                  <div id="CreateEventImgURLContainer">
                    <input id='CreateEventImgURL' matInput [(ngModel)]="ImgURL" placeholder="Enter Event Img URL" required>
                  </div>
                </div>
                <div id="SubmitErrorContainer">
                  <p id="SubmitError" #SubmitError>Please Fill Out All Fields</p>
                </div>
                <div id="SubmitEventButtonContainer">
                  <button mat-raised-button id='SubmitEventButton' mat-raised-button   (click)="submitEvent()">Submit Event</button>
                  <p id="Success" #Success>Event Created Successfully</p>
                </div>
              </div>

              <div id='EventPreviewView'>
                <div id="EventCard" >
                  <div id="EventCardImageContainer">
                    <ng-container *ngIf="modalOpen; else smallView">
                      <div id="ModalView" (click)="closeModal()">
                        <i
                          id="ModalClose"
                          class="fa fa-solid fa-times"
                          (click)="closeModal()"
                        ></i>
                        <img id="ModalImage" [src]="ImgURL">
                      </div>
                    </ng-container>
                    <ng-template #smallView>
                      <img id="EventCardImageBackground" [src]="ImgURL"  (click)="showModal()">
                      <img id="EventCardImage" [src]="ImgURL" (click)="showModal()">
                    </ng-template>
                  </div>
                  <div id="EventCardTextContainer" (click)="redirectFacebook()">
                    <div id="EventCardTextTopContainer">
                      <p id="EventCardTextTop">{{ Title }}</p>
                    </div>
                    <div id="EventCardTextBottomContainer">
                      <p id="EventCardTextBottom"><a href="https://facebook.com/DTKMariamGebriel" target="blank"><span id="Icon" class="fab fa-facebook"></span></a>{{ Desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
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
        #AdminEvents {
          display: flex;
          position: relative;
          width: 100%;
          height: 80%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #AdminEventsContainer {
          display: flex;
          position: relative;
          width: 90%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        #CreateEventContainer {
          display: flex;
          position: relative;
          width: 50%;
          height: 70%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #AdminEventsHeaderContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 10%;
          justify-content: center;
          align-items: center;
        }
        #AdminEventsHeader {
        }
        #CreateEventForm {
          display: flex;
          position: relative;
          width: 100%;
          height: 80%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #CreateEventTitleContainer, #CreateEventDescContainer, #CreateEventImgURLContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 20%;
          margin: 10px;
          justify-content: center;
          align-items: center;
        }
        #CreateEventTitle, #CreateEventDesc, #CreateEventImgURL {
          display: flex;
          position: relative;
          width: 80%;
          height: 100%;
          border-radius: 5px;
          border: 1px solid black;
          padding-left: 10px;
          font-size: 18px;
          font-family: 'Inter';
        }
        #SubmitErrorContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 10%;
          justify-content: center;
          align-items: center;
        }
        #SubmitError {
          display: none;
          position: relative;
          width: 80%;
          height: 100%;
          justify-content: center;
          align-items: center;
          color: red;
        }
        #SubmitEventButtonContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 20%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #SubmitEventButton {
          display: flex;
          position: relative;
          width: 200px;
          height: 75px;
          justify-content: center;
          align-items: center;
          border-radius: 55px;
          background-color: #2978e6;
          color: white;
          border: 1px solid black;
          font-size: 18px;
          font-family: 'InterBold';
          margin-bottom: 10px;
        }
        #Success {
          display: none;
        }
        #EventPreviewView {
          display: flex;
          position: relative;
          width: 50%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #EventCard {
          display: flex;
          position: relative;
          width: 350px;
          height: 480px;
          flex-direction: column;
          border-radius: 20px;
          cursor: pointer;
          border: 1px solid black;
        }
        #EventCardImageContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 80%;
          overflow: hidden;
          border-bottom: 1px solid black;
          border-radius: 20px 20px 0 0;
        }
        #EventCardImageBackground {
          display: flex;
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          scale: 1.5;
          background-position: center;
          filter: blur(9px);
        }
        #EventCardImage {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 5px;
        }
        #EventCardImage:hover, #EventCardImageBackground:hover {
          opacity: 0.8;
        }
        #EventCardTextContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 20%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #EventCardTextTopContainer {
          display: flex;
          position: relative;
          width: 85%;
          height: 40%;
          align-items: center;
        }
        #EventCardTextTop {
          display: flex;
          position: relative;
          width: 100%;
        }
        #EventCardTextBottomContainer {
          display: flex;
          position: relative;
          width: 85%;
          height: 40%;
          align-items: center;
        }
        #EventCardTextBottom {
          display: flex;
          position: relative;
        }
        #Icon {
          margin-right: 5px;
        }
        #ModalView {
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.7);
          justify-content: center;
          align-items: center;
          z-index: 100;
        }
        #ModalImage {
          display: flex;
          position: absolute;
          width: 80%;
          height: 80%;
          object-fit: contain;
          border-radius: 10px;
          cursor: pointer;
        }
        #ModalClose {
          display: flex;
          position: absolute;
          top: 5%;
          left: 5%;
          font-size: 40px;
          color: white;
          cursor: pointer;
        }
        #ModalClose:hover {
          opacity: 0.5;
        }
        @media (max-width: 890px) {
          #AuthContainer {
            height: 100%;
          }
          #AdminEvents {
            height: 100%;
          }
          #AdminEventsContainer {
            flex-direction: column;
            margin: 10%;
          }
          #CreateEventContainer {
            width: 100%;
            height: 400px;
            margin-bottom: 10%;
          }
        }
  `]
})

export class AdminEvents implements OnInit {

  @ViewChild('SubmitError', { static: false }) SubmitErrorRef!: ElementRef;
  @ViewChild('Success', { static: false }) successRef!: ElementRef;
  private firestore: Firestore = inject(Firestore);


  login: boolean = true;
  loggedIn: boolean = false;
  Name: string = "";
  Password: string = "";


  Title: string = "";
  Desc: string = "";
  ImgURL: string = "";


  modalOpen: boolean = false;

  showModal() {
    this.modalOpen = true;
    console.log(this.ImgURL);
  };

  closeModal = () => {
    this.modalOpen = false;
  };


  submitEvent() {
    if (this.Title === "" || this.Desc === "" || this.ImgURL === "") {
      this.SubmitErrorRef.nativeElement.style.display = 'flex';

      setTimeout(() => {
        this.SubmitErrorRef.nativeElement.style.display = 'none';
      }, 3000);
    } else {
      addDoc(collection(this.firestore, "Events"), {
        Name: this.Title,
        Desc: this.Desc,
        URL: this.ImgURL,
        Date: new Date()
      });
      this.successRef.nativeElement.style.display = 'flex';

      setTimeout(() => {
        this.successRef.nativeElement.style.display = 'none';
      }, 3000);
      this.Title = "";
      this.Desc = "";
      this.ImgURL = "";

    }
  }


  constructor(private afAuth: Auth) {}

  ngOnInit() {this.isloggedIn();}

  isloggedIn() {
    const token = localStorage.getItem("admin");

    if (token) {
      this.Name = JSON.parse(localStorage.getItem("admin")!)['Name'];
      this.Password = JSON.parse(localStorage.getItem("admin")!)['Password'];
      this.loggedIn = true;
      this.login = false;
      console.log("logged in, u got it smh");
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

  redirectFacebook() {
    window.open("https://www.facebook.com/DTKMariamGebriel");
  }
}
