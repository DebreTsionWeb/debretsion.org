import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Firestore, collectionData, collection, orderBy, query, limit} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Events {
  Name: string,
  Desc: string,
  URL: string,
  Date: string
};

interface Galleries {
  Name: string;
  URL: string[];
}

@Component({
    selector: "HomeBody",
    template: `
        <div id="HomeBody">
          <div id="HomeBodyContainer">

            <div id="HeroContainer">
              <div id="HeroVideoContainer">
                <video id='BackgroundVideo' muted autoplay loop preload playsinline webkit-playsinline [muted]="'muted'" autoplay="autoplay" loop="loop" playsinline poster="assets/debretsionherothumbnail.png">
                  <source src="https://res.cloudinary.com/dc5kku9wp/video/upload/v1690918358/Untitled_arczvz.mp4">
                </video>

                <div id="HeroTextContainer">
                  <div id="HeroHeaderContainer">
                    <p id="HeroHeader">Debre Tsion Kidist Mariam we Kidus Gebriel E.O.T.C</p>
                  </div>
                  <div id="HeroSubHeaderContainer">
                    <p id="HeroSubText">Psalms 78:68: "The mount Zion which he loved, And he built his sanctuary like high palaces, like the earth which he hath established forever."</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="HomeAboutContainer">
              <div id="HomeAboutHeaderContainer">
                <p id="HomeAboutHeader">About Us</p>
              </div>
              <div id="HomeAboutSubTextContainer">
                <p id="HomeAboutSubText">Debre Tsion Kidist Mariam and Gebriel Ethiopian Orthodox Tewahedo Church was established in a rented church in Silver Spring, Maryland, on June 21, 2006. Debre Selam Kidist Mariam Church & Kidus Gabriel Church in Washington DC and the surrounding area was blessed by the archbishop of the Diocese of Abune Fanuel, and since the time it began to provide services, it has been growing rapidly, in terms of property and number of believers, as well as in spiritual service. Debre Tsion Kidist Mariam and Gebriel has now established in Brookeville, Maryland with her own fully-owned church building.</p>
              </div>
              <div id="HomeAboutButtonContainer">
                <button mat-raised-button id="HomeAboutButton" (click)="navigateTo('/en/About')">View About Page</button>
              </div>
            </div>

            <div id="HomeLocationContainer">
              <div id="HomeLocationTextContainer">
                <div id="HomeLocationHeaderContainer">
                  <p id="HomeLocationHeader">Location</p>
                </div>
                <div id="HomeLocationInfoContainer">
                  <p id="HomeLocationInfo">22222 Georgia Ave,<br>Brookeville, MD 20833</p>
                  <p id="HomeLocationInfo">Phone: 804-814-6011</p>
                  <a id='HomeLocationInfo' href="https://mail.google.com/mail?view=cm&fs=1&to=kwgzme@yahoo.com&su=Draft" target="blank">kwgzme@yahoo.com</a>
                </div>
                <div id="HomeLocationButtonContainer">
                  <button mat-raised-button id="HomeLocationButton" (click)="navigateTo('/en/Contact')">View Contact Page</button>
                </div>
              </div>
              <div id="HomeLocationMapContainer">
                <iframe id='HomeLocationMap' src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3yT_4rYS-Yn7C8XucfB3jvn1tcG1dZZk&q=22222+Georgia+Ave,+Brookeville,+MD+20833"></iframe>
              </div>
            </div>

            <div id="HomeEventsContainer">
              <ng-container *ngIf="isMobile; else desktopView">
                <div id="MobileHomeEventsHeaderContainer">
                  <p id="MobileHomeEventsHeader">Recent Events</p>
                </div>
                <div id="MobileHomeEventsImageContainer" *ngIf="Event$ | async as event">
                  <img id="HomeEventsImage" [lazyLoad]="event[0].URL" />
                </div>
                <div id="MobileHomeEventsParagraphContainer">
                  <p id="MobileHomeEventsParagraph">Past events and upcoming events can be found on this page.</p>
                </div>
                <div id="MobileHomeEventsButtonContainer">
                  <button mat-raised-button id="MobileHomeEventsButton" (click)="navigateTo('/en/Events')">View All Events</button>
                </div>
              </ng-container>
              <ng-template #desktopView>
                <div id="HomeEventsImageContainer" *ngIf="Event$ | async as event">
                  <img [lazyLoad]="event[0].URL" id="HomeEventsImage" (click)="redirectFB()"/>
                </div>
                <div id="HomeEventsTextContainer">
                  <div id="HomeEventsHeaderContainer">
                    <p id="HomeEventsHeader">Recent Events</p>
                  </div>
                  <div id="HomeEventsParagraphContainer">
                    <p id="HomeEventsParagraph">Past events and upcoming events can be found on this page.</p>
                  </div>
                  <div id="HomeEventsButtonContainer">
                    <button mat-raised-button id="MobileHomeEventsButton" (click)="navigateTo('/en/Events')">View All Events</button>
                  </div>
                </div>
              </ng-template>
            </div>

            <div id="HomeGalleryContainer">
              <div id="HomeGalleryHeaderContainer">
                <p id="HomeGalleryHeader">Recent Gallery</p>
              </div>
              <div id="HomeGalleryImageContainer">
                <div id="Collection" *ngFor="let gallery of Gallery$ | async">
                  <div id="CollectionHeaderContainer">
                    <p id="CollectionHeader">{{ gallery.Name }}</p>
                  </div>
                  <div id="CollectionImagesContainer">
                    <ng-container *ngFor="let url of gallery.URL">
                      <ng-container *ngIf="modalOpen; else smallView">
                        <div id="ModalView" (click)="closeModal()">
                          <i
                            id="ModalClose"
                            class="fa fa-solid fa-times"
                            (click)="closeModal()"
                          ></i>
                          <img
                            id="ModalImage"
                            [lazyLoad]="selectedImage"
                            (click)="closeModal()"
                          />
                        </div>
                      </ng-container>
                      <ng-template #smallView>
                        <img
                          id="CollectionImage"
                          [lazyLoad]="url"
                          (click)="showModal(selectedImage = url)"
                        />
                      </ng-template>
                    </ng-container>
                  </div>
                </div>
              </div>
              <div id="HomeGalleryButtonContainer">
                <button mat-raised-button id="HomeGalleryButton" (click)="navigateTo('/en/Gallery')">View All Galleries</button>
              </div>
            </div>

            <div id="HomeDonateContainer">
              <div id="HomeDonateHeaderContainer">
                  <p id="HomeDonateHeader">Donate</p>
              </div>
              <div id="HomeDonateIconContainer">
                <div id="HomeDonateIcon">
                  <a id='ZelleContainer' href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiREVCUkUgVFNJT04gS0lESVNUIE1BUklBTSBXRSBLSURVUyBHQUJSSSIsImFjdGlvbiI6InBheW1lbnQiLCJ0b2tlbiI6ImR0bWFyaWFtZ0BnbWFpbC5jb20ifQ==" target='blank'><p id='ZelleText'>804-814-6011</p><img id='Zelle' src="assets/zelle.webp" alt=""></a>
                  <a href="https://www.zeffy.com/en-US/donation-form/fb04e99d-e542-46e8-a7f3-dd9907545ae7" target='blank'><img id='Zeffy' src="assets/zeffy.png" alt=""></a>
                </div>
              </div>
            </div>

          </div>
        </div>
    `,
    styles: [`

        #HomeBody {
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #HomeBodyContainer {
            display: flex;
            position: relative;
            width: 90%;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #HeroContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 90vh;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }

        #HeroVideoContainer {
            display: flex;
            position: absolute;
            width: 99.5vw;
            height: 94vh;
            top: 0;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            object-fit: contain;
        }

        #BackgroundVideo {
            display: flex;
            position: absolute;
            width: 200%;
            height: 200%;
            filter: brightness(50%);
        }

        #HeroTextContainer {
            display: flex;
            position: relative;
            width: 55%;
            height: 400px;
            margin-left: 45%;
            margin-right: 2%;
            padding-right: 2%;
            padding-left: 2%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            z-index: 3;
        }

        #HeroHeaderContainer {
            display: flex;
            position: relative;
            height: 50%;
        }

        #HeroHeader {
            display: flex;
            position: relative;
            font-family: 'InterBold';
            font-size: 52px;
            text-align: right;
            color: white;
        }

        #HeroSubHeaderContainer {
            display: flex;
            position: relative;
            height: 50%;
            text-align: right;
            justify-content: center;
            align-items: center;
        }

        #HeroSubText {
            display: flex;
            position: relative;
            font-family: 'InterMedium';
            font-size: 22px;
            color: white;
        }

        #HomeAboutContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 80vh;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #HomeAboutHeaderContainer {
            display: flex;
            position: relative;
            width: 85%;
            justify-content: center;
            align-items: center;
        }

        #HomeAboutHeader {
            display: flex;
            position: relative;
            font-family: 'InterBold';
            font-size: 52px;
        }

        #HomeAboutSubTextContainer {
            display: flex;
            position: relative;
            width: 85%;
        }

        #HomeAboutSubText {
            display: flex;
            position: relative;
            font-family: 'InterMedium';
            font-size: 22px;
        }

        #HomeAboutButtonContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 30%;
            margin-top: 5px;
            justify-content: center;
            align-items: center;
        }

        #HomeAboutButton {
            display: flex;
            position: relative;
            width: 200px;
            height: 70px;
            justify-content: center;
            align-items: center;
            font-family: 'InterMedium';
            font-size: 17px;
            border-radius: 55px;
            background-color: #2978e6;
            color: white;
        }

        #HomeLocationContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 80vh;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        #HomeLocationTextContainer {
            display: flex;
            position: relative;
            width: 40%;
            height: 100%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        #HomeLocationHeaderContainer {
            display: flex;
            position: relative;
            width: 80%;
            justify-content: flex-start;
        }

        #HomeLocationHeader {
            display: flex;
            position: relative;
            font-family: 'InterBold';
            font-size: 52px;
        }

        #HomeLocationInfoContainer {
            display: flex;
            position: relative;
            width: 80%;
            flex-direction: column;
            font-family: 'InterMedium';
            align-items: flex-start;
        }

        #HomeLocationInfo {
            display: flex;
            position: relative;
            font-family: 'InterMedium';
            font-size: 22px;
        }

        #HomeLocationButtonContainer {
            display: flex;
            position: relative;
            width: 80%;
            height: 35%;
            margin-top: 35px;
            margin-bottom: 35px;
            justify-content: flex-start;
            align-items: center;
        }

        #HomeLocationButton {
            display: flex;
            position: relative;
            width: 200px;
            height: 70px;
            justify-content: center;
            align-items: center;
            border-radius: 55px;
            background-color: #2978e6;
            color: white;
            font-family: 'InterMedium';
            font-size: 17px;
        }

        #HomeLocationMapContainer {
            display: flex;
            position: relative;
            width: 60%;
            height: 80%;
            justify-content: center;
            align-items: center;
        }

        #HomeLocationMap {
            display: flex;
            position: relative;
            width: 70%;
            height: 90%;
        }

        #HomeEventsContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 80vh;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        #HomeEventsImageContainer {
            display: flex;
            position: relative;
            width: 60%;
            height: 90%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            overflow: hidden;
        }

        #HomeEventsImage {
            display: flex;
            position: relative;
            height: 100%;
            object-fit: contain;
            cursor: pointer;
        }

        #HomeEventsTextContainer {
            display: flex;
            position: relative;
            width: 80%;
            height: 100%;
            justify-content: center;
            align-items: flex-end;
            flex-direction: column;
        }

        #HomeEventsHeaderContainer {
            display: flex;
            position: relative;
            width: 80%;
            justify-content: flex-end;
            align-items: center;
        }

        #HomeEventsHeader {
            display: flex;
            position: relative;
            font-family: 'InterBold';
            font-size: 52px;
            text-align: right;
        }

        #HomeEventsParagraphContainer {
            display: flex;
            position: relative;
            width: 60%;
            justify-content: flex-end;
            align-items: center;
            text-align: right;
        }

        #HomeEventsParagraph {
            display: flex;
            position: relative;
            font-family: 'InterMedium';
            font-size: 22px;
        }

        #HomeEventsButtonContainer {
            display: flex;
            position: relative;
            width: 80%;
            height: 30%;
            justify-content: flex-end;
            align-items: center;
        }

        #HomeEventsButton {
            display: flex;
            position: relative;
            width: 200px;
            height: 70px;
            justify-content: center;
            align-items: center;
            border-radius: 55px;
            background-color: #2978e6;
            color: white;
            font-family: 'InterMedium';
            font-size: 17px;
        }

        #MobileHomeEventsImageContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        #MobileHomeEventsImage {
            display: flex;
            position: relative;
            width: 80%;
            height: 80%;
            object-fit: contain;
            cursor: pointer;
        }

        #MobileHomeEventsTextContainer {
            display: flex;
            position: relative;
            width: 40%;
            height: 100%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        #MobileHomeEventsHeaderContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 20%;
            justify-content: center;
        }

        #MobileHomeEventsHeader {
            display: flex;
            position: relative;
            font-family: 'InterBold';
            font-size: 40px;
        }

        #MobileHomeEventsParagraphContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 30%;
            justify-content: center;
            align-items: center;
        }

        #MobileHomeEventsParagraph {
            display: flex;
            position: relative;
            font-family: 'InterMedium';
            font-size: 20px;
            text-align: center;
        }

        #MobileHomeEventsButtonContainer {
            display: flex;
            position: relative;
        }

        #MobileHomeEventsButton {
            display: flex;
            position: relative;
            width: 200px;
            height: 70px;
            justify-content: center;
            align-items: center;
            border-radius: 55px;
            background-color: #2978e6;
            color: white;
            font-family: 'InterMedium';
            font-size: 17px;
        }

        #HomeGalleryContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 90vh;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
        }

        #HomeGalleryHeaderContainer {
            display: flex;
            position: relative;
            width: 80%;
            height: 20%;
        }

        #HomeGalleryHeader {
            display: flex;
            position: relative;
            font-family: 'InterBold';
            font-size: 52px;
        }

        #HomeGalleryImageContainer {
            display: flex;
            position: relative;
            margin-left: 5%;
        }

        #Collection {
            display: flex;
            position: relative;
            flex-direction: column;
            margin-bottom: 5%;
            overflow-x: hidden;
        }

        #CollectionHeaderContainer {
            display: flex;
            position: relative;
            flex-direction: column;
        }

        #CollectionHeader {
            display: flex;
            position: relative;
            font-size: 20px;
            flex-direction: column;
        }

        #CollectionImagesContainer {
            display: flex;
            position: relative;
            flex-direction: row;
            overflow-x: scroll;
        }

        #CollectionImagesContainer::-webkit-scrollbar{
          height: 0.5em !important;
          background-color: white;
        }

        #CollectionImagesContainer::-webkit-scrollbar-thumb{
          background-color: rgba(0, 0, 0, .3);
          border-radius: 1% / 90%;
        }

        #CollectionImage {
            margin-right: 15px;
            margin-bottom: 10px;
            border-radius: 10px;
            width: 450px;
            height: 300px;
            cursor: pointer;
        }

        #CollectionImage:hover {
          opacity: 0.8;
        }

        #HomeGalleryButtonContainer {
            display: flex;
            position: relative;
        }

        #HomeGalleryButton {
            display: flex;
            position: relative;
            width: 200px;
            height: 70px;
            justify-content: center;
            align-items: center;
            border-radius: 55px;
            background-color: #2978e6;
            color: white;
            font-family: 'InterMedium';
            font-size: 17px;
        }

        #HomeDonateContainer {
            display: flex;
            position: relative;
            height: 50vh;
            width: 100%;
            flex-direction: column;
        }

        #HomeDonateHeaderContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 20%;
          justify-content: center;
          text-align: center;
        }

        #HomeDonateHeader {
          display: flex;
          position: relative;
          font-family: 'InterBold';
          font-size: 52px;
        }

        #HomeDonateIconContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        #HomeDonateIcon {
          display: flex;
          position: relative;
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          gap: 10px;
        }

        #Zelle, #Square, #Zeffy {
            display: flex;
            position: relative;
            width: 100px;
        }

        #ZelleContainer {
          display: flex;
          position: relative;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: black;
          font-family: 'InterSemi';
          text-decoration: underline;
          text-decoration-color: transparent;
        }

        #ZelleText {
          display: none;
          position: absolute;
          top: -40px;
          font-size: 12px;
        }

        #Zelle:hover, #Square:hover, #Zeffy:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
          opacity: 0.8;
        }

        #ZelleContainer:hover #ZelleText {
          display: flex;
        }

        button{
          cursor: pointer;
        }

        button:hover {
          animation-name: buttonAnim;
          animation-duration: 1s;
          animation-fill-mode: both;
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

        .mdc-button {
          letter-spacing: normal !important;
          font-size: 16px;
        }

        @keyframes buttonAnim {
          from {
            opacity: 1;
          }
          to {
            opacity: 0.8;
          }
        }

        @media (max-width: 1050px) {
          #HeroTextContainer {
            width: 70%;
            margin-left: 20%;
          }
        }

        @media (max-width: 700px) {

          #HomeBodyContainer {
            width: 95%;
          }

          #HeroContainer {
            flex-direction: column;
            height: 80vh;
            margin-top: 10%;
            margin-bottom: 10%;
          }

          #HeroVideoContainer {
            width: 100vw;
            height: 100vh;
            top: -20vh;
          }

          #BackgroundVideo {
            width: 300%;
            height: 300%;
          }

          #HeroTextContainer {
            width: 100%;
            height: 30%;
            margin-top: 90%;
            margin-left: 0;
            margin-right: 0;
          }

          #HeroHeaderContainer {
            height: 50%;
          }

          #HeroSubHeaderContainer {
            height: 50%;
          }

          #HeroHeader {
            font-size: 30px;
            text-align: center;
          }

          #HeroSubText {
            font-size: 15px;
            text-align: center;
          }

          #HomeAboutContainer {
            height: 90vh;
            margin-bottom: 30px;
          }

          #HomeAboutHeader {
            font-size: 40px;
          }

          #HomeAboutSubText {
            font-size: 20px;
            text-align: center;
          }

          #HomeLocationContainer {
            flex-direction: column;
          }

          #HomeLocationTextContainer {
            width: 100%;
            height: 90%;
          }

          #HomeLocationHeaderContainer {
            width: 100%;
            justify-content: center;
          }

          #HomeLocationHeader {
            font-size: 40px;
          }

          #HomeLocationInfoContainer {
            width: 100%;
            align-items: center;
          }

          #HomeLocationInfo {
            font-size: 20px;
            text-align: center;
          }

          #HomeLocationButtonContainer {
            width: 100%;
            justify-content: center;
          }

          #HomeLocationMapContainer {
            width: 100%;
            height: 50%;
          }

          #HomeEventsContainer {
            width: 100%;
            height: 100vh;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          #HomeGalleryContainer {
            height: 80vh;
          }

          #HomeGalleryHeaderContainer {
            width: 100%;
            height: 20%;
            justify-content: center;
            align-items: center;
          }

          #HomeGalleryHeader {
            font-size: 40px;
            text-align: center;
          }

          #CollectionImage{
            width: 300px;
            height: 200px;
          }

          #HomeGalleryButtonContainer {
            width: 100%;
            height: 20%;
            justify-content: center;
            align-items: center;
          }

          #HomeDonateContainer {
            height: 40vh;
          }

          #HomeDonateHeaderContainer {
            width: 100%;
            height: 20%;
            justify-content: center;
            text-align: center;
          }

          #HomeDonateHeader {
            font-size: 40px;
          }

          #HomeDonateIcon {
            width: 100%;
          }

          #ZelleText {
            display: flex;
          }
        }

    `]
})
export class HomeBody implements OnInit{

  Event$: Observable<Events[]>;
  Gallery$: Observable<Galleries[]>;
  firestore: Firestore = inject(Firestore);

  constructor(private router: Router) {
    const EventCollection = collection(this.firestore, 'Events');
    const EventQuerySnapshot = collectionData(query(EventCollection, orderBy('Date', 'desc')));
    this.Event$ = EventQuerySnapshot as Observable<Events[]>;

    const GalleryCollection = collection(this.firestore, 'Gallery');
    const GalleryQuerySnapshot = collectionData(query(GalleryCollection, orderBy('Date', 'desc'), limit(1)));
    this.Gallery$ = GalleryQuerySnapshot as Observable<Galleries[]>;
  }

  ngOnInit() {}

  isMobile: boolean = window.innerWidth <= 700;

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  modalOpen: boolean = false;
  selectedImage: string = '';

  closeModal = () => {
    this.modalOpen = false;
  };

  showModal = (selectedImage: string) => {
    this.selectedImage = selectedImage;
    this.modalOpen = true;
  };

  redirectFB() {
    window.open("https://www.facebook.com/DTKMariamGebriel");
  }
}
