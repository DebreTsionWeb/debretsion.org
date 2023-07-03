import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "HomeBody",
    template: `
        <div id="HomeBody">
          <div id="HomeBodyContainer">

            <div id="HeroContainer">
              <div id="HeroImageContainer">
                <img src="assets/ExampleAboutImg.jpg" id="HeroImage"/>
              </div>
              <div id="HeroTextContainer">
                <div id="HeroHeaderContainer">
                  <p id="HeroHeader">Welcome to the home page!</p>
                </div>
                <div id="HeroSubHeaderContainer">
                  <p id="HeroSubText">This is the home page of the website. This is where you can find all the information about the website.</p>
                </div>
              </div>
            </div>

            <div id="HomeAboutContainer">
              <div id="HomeAboutHeaderContainer">
                <p id="HomeAboutHeader">About</p>
              </div>
              <div id="HomeAboutSubTextContainer">
                <p id="HomeAboutSubText">This is the about section of the website. This is where you can find all the information about the website.</p>
              </div>
              <div id="HomeAboutButtonContainer">
                <button id="HomeAboutButton" (click)="navigateTo('/About')">View About Page</button>
              </div>
            </div>

            <div id="HomeLocationContainer">
              <div id="HomeLocationTextContainer">
                <div id="HomeLocationHeaderContainer">
                  <p id="HomeLocationHeader">Location</p>
                </div>
                <div id="HomeLocationInfoContainer">
                  <p id="HomeLocationInfo">22222 Gerogia Ave,<br>Brookeville, MD 20833</p>
                  <p id="HomeLocationInfo">Phone: 301-570-3300</p>
                  <a id='HomeLocationInfo' href="https://mail.google.com/mail?view=cm&fs=1&to=kwgzme@yahoo.com&su=Draft" target="blank">kwgzme@yahoo.com</a>
                </div>
                <div id="HomeLocationButtonContainer">
                  <button id="HomeLocationButton" (click)="navigateTo('/Contact')">View Contact Page</button>
                </div>
              </div>
              <div id="HomeLocationMapContainer">
                <img src="/" id="HomeLocationMap"/>
              </div>
            </div>

            <div id="HomeEventsContainer">
              <ng-container *ngIf="isMobile; else desktopView">
                <div id="MobileHomeEventsHeaderContainer">
                  <p id="MobileHomeEventsHeader">Events</p>
                </div>
                <div id="MobileHomeEventsImageContainer">
                  <img [lazyLoad]="RecentEvent" id="HomeEventsImage" />
                </div>
                <div id="MobileHomeEventsParagraphContainer">
                  <p id="MobileHomeEventsParagraph">This is the events section of the website. This is where you can find all the information about the website.</p>
                </div>
                <div id="MobileHomeEventsButtonContainer">
                  <button id="MobileHomeEventsButton" (click)="navigateTo('/Events')">View All Events</button>
                </div>
              </ng-container>
              <ng-template #desktopView>
                <div id="HomeEventsImageContainer">
                  <img [lazyLoad]="RecentEvent" id="HomeEventsImage" />
                </div>
                <div id="HomeEventsTextContainer">
                  <div id="HomeEventsHeaderContainer">
                    <p id="HomeEventsHeader">Recent Event</p>
                  </div>
                  <div id="HomeEventsParagraphContainer">
                    <p id="HomeEventsParagraph">This is the events section of the website. This is where you can find all the information about the website.</p>
                  </div>
                  <div id="HomeEventsButtonContainer">
                    <button id="MobileHomeEventsButton" (click)="navigateTo('/Events')">View All Events</button>
                  </div>
                </div>
              </ng-template>
            </div>

            <div id="HomeGalleryContainer">
              <div id="HomeGalleryHeaderContainer">
                <p id="HomeGalleryHeader">Recent Gallery</p>
              </div>
              <div id="HomeGalleryImageContainer">
              <div class="Collection" #collection>
                    <div id="CollectionHeaderContainer">
                        <p id='CollectionHeader'>Christmas</p>
                    </div>
                    <div id="CollectionImagesContainer">
                        <img id='CollectionImage' [lazyLoad]="gallery2" alt="">
                        <img id='CollectionImage' [lazyLoad]="gallery3" alt="">
                        <img id='CollectionImage' [lazyLoad]="gallery4" alt="">
                        <img id='CollectionImage' [lazyLoad]="gallery5" alt="">
                        <img id='CollectionImage' [lazyLoad]="gallery6" alt="">
                        <img id='CollectionImage' [lazyLoad]="gallery7" alt="">
                        <img id='CollectionImage' [lazyLoad]="gallery8" alt="">
                        <img id='CollectionImage' [lazyLoad]="gallery9" alt="">
                    </div>
                  </div>
              </div>
              <div id="HomeGalleryButtonContainer">
                <button id="HomeGalleryButton" (click)="navigateTo('/Gallery')">View All Galleries</button>
              </div>
            </div>

            <div id="HomeDonateContainer">
              <div id="HomeDonateHeaderContainer">
                  <p id="HomeDonateHeader">Donate</p>
              </div>
              <div id="HomeDonateIconContainer">
                <div id="HomeDonateIcon">
                  <a href=""><img id='Zelle' src="assets/zelle.webp" alt=""></a>
                  <a href=""><img id='Square' src="assets/square.jpg" alt=""></a>
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
        }

        #HeroImageContainer {
            display: flex;
            position: relative;
            width: 50%;
            height: 95%;
            justify-content: center;
            align-items: center;
        }

        #HeroImage {
            display: flex;
            position: relative;
            width: 80%;
            height: 80%;
            object-fit: contain;
        }

        #HeroTextContainer {
            display: flex;
            position: relative;
            width: 50%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #HeroHeaderContainer {
            display: flex;
            position: relative;
        }

        #HeroHeader {
            display: flex;
            position: relative;
            font-family: 'InterBold';
            font-size: 52px;
            text-align: right;
        }

        #HeroSubHeaderContainer {
            display: flex;
            position: relative;
            text-align: right;
        }

        #HeroSubText {
            display: flex;
            position: relative;
            font-family: 'InterMedium';
            font-size: 22px;
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
            border-radius: 20px;
            font-family: 'InterMedium';
            font-size: 17px;
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
            border-radius: 20px;
            font-family: 'InterMedium';
            font-size: 17px;
        }

        #HomeLocationMapContainer {
            display: flex;
            position: relative;
            width: 60%;
        }

        #HomeLocationMap {
            display: flex;
            position: relative;
            width: 100%;
            height: 50%;
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
        }

        #HomeEventsImage {
            display: flex;
            position: relative;
            height: 100%;
            object-fit: contain;
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
            border-radius: 20px;
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
            border-radius: 20px;
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

        .Collection {
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
          height: 0.5em;
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
            border-radius: 20px;
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
          align-items: flex-end;
        }

        #HomeDonateIcon {
          display: flex;
          position: relative;
          width: 20%;
          height: 100%;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }

        #Zelle, #Square {
            display: flex;
            position: relative;
            width: 100px;
        }

        #Zelle:hover, #Square:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
          opacity: 0.8;
        }

        button{
          cursor: pointer;
        }

        button:hover {
          animation-name: buttonAnim;
          animation-duration: 1s;
          animation-fill-mode: both;
        }

        @keyframes buttonAnim {
          from {
            background-color: gradient(#e0e0e0, #c0c0c0);
          }
          to {
            background-color: #e0e0e0;
          }
        }


        @media (max-width: 850px) {

          #HomeBodyContainer {
            width: 95%;
          }

          #HeroContainer {
            flex-direction: column;
            height: 75vh;
            margin-top: 10%;
            margin-bottom: 10%;
          }

          #HeroImageContainer {
            width: 100%;
          }

          #HeroImage {
            height: 100%;
          }

          #HeroTextContainer {
            width: 100%;
            height: 60%;
          }

          #HeroHeader {
            font-size: 40px;
            text-align: center;
          }

          #HeroSubText {
            font-size: 20px;
            text-align: center;
          }

          #HomeAboutContainer {
            height: 60vh;
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
            width: 70%;
          }

        }

    `]
})
export class HomeBody implements OnInit{

  RecentEvent = "assets/ExampleAboutImg.jpg";

  gallery2 = "assets/GalleryEx2.jpg"
  gallery3 = "assets/GalleryEx3.jpg"
  gallery4 = "assets/GalleryEx4.jpg"
  gallery5 = "assets/GalleryEx5.jpg"
  gallery6 = "assets/GalleryEx6.jpg"
  gallery7 = "assets/GalleryEx7.jpg"
  gallery8 = "assets/GalleryEx8.jpg"
  gallery9 = "assets/GalleryEx9.jpg"

  isMobile: boolean = window.innerWidth <= 850;

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit() {}
}
