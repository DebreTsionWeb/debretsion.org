import { Component, OnInit } from "@angular/core";

@Component({
    selector: "EventsBody",
    template: `
          <div id="EventsBody">
            <div id="EventsBodyContainer">
               <div id="EventsBodyHeaderContainer">
                  <h1 id="EventsBodyHeader">Events</h1>
               </div>
               <div id="EventCardContainer">
                <div id="EventCardBodyContainer">
                    <div id="EventCard" (click)="redirectFacebook()">
                      <div id="EventCardImageContainer">
                        <img id="EventCardImageBackground" [src]="test">
                        <img id="EventCardImage" [lazyLoad]="test">
                      </div>
                      <div id="EventCardTextContainer">
                        <div id="EventCardTextTopContainer">
                          <p id="EventCardTextTop">Event Name</p>
                        </div>
                        <div id="EventCardTextBottomContainer">
                          <p id="EventCardTextBottom">Event Description</p>
                        </div>
                      </div>
                    </div>
                    <div id="EventCard" (click)="redirectFacebook()">
                      <div id="EventCardImageContainer">
                        <img id="EventCardImageBackground" [src]="test">
                        <img id="EventCardImage" [lazyLoad]="test">
                      </div>
                      <div id="EventCardTextContainer">
                        <div id="EventCardTextTopContainer">
                          <p id="EventCardTextTop">Event Name</p>
                        </div>
                        <div id="EventCardTextBottomContainer">
                          <p id="EventCardTextBottom">Event Description</p>
                        </div>
                      </div>
                    </div>
                    <div id="EventCard" (click)="redirectFacebook()">
                      <div id="EventCardImageContainer">
                        <img id="EventCardImageBackground" [src]="test">
                        <img id="EventCardImage" [lazyLoad]="test">
                      </div>
                      <div id="EventCardTextContainer">
                        <div id="EventCardTextTopContainer">
                          <p id="EventCardTextTop">Event Name</p>
                        </div>
                        <div id="EventCardTextBottomContainer">
                          <p id="EventCardTextBottom">Event Description</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="ArrowContainer">
                    <!-- Didnt feel like doing numbers dont judge me -->
                    <img id="BackArrow" (click)="nextSet" [lazyLoad]="backArrow">
                    <img id="FrontArrow" (click)="nextSet" [lazyLoad]="frontArrow">
                  </div>
                </div>
              </div>
            </div>

    `,
    styles: [`
        #EventsBody {
          display: flex;
            position: relative;
            width: 100%;
            height: 95vh;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        @keyframes slide-in {
          0% {
            right: 20px;
            opacity: 0;
          }
          100% {
            right: 0;
            opacity: 1;
          }
        }
        @keyframes rise-up {
          0% {
            opacity: 0;
            top: 20px;
          }
          100% {
            opacity: 1;
            top: 0;
          }
        }
        #EventsBodyContainer {
          display: flex;
            position: relative;
            width: 92%;
            height: 95%;
            flex-direction: column;
        }
        #EventsBodyHeaderContainer {
          display: flex;
            position: relative;
            flex-direction: column;
        }
        #EventsBodyHeader {
          display: flex;
            position: relative;
            flex-direction: column;
            margin-top: 5%;
            font-size: 40px;
            animation: slide-in 1.5s ease-in-out;
        }
        #EventCardContainer {
          display: flex;
            position: relative;
            width: 100%;
            flex-direction: row;
            justify-content: center;
        }
        #EventCardBodyContainer {
          display: grid;
            position: relative;
            width: 95%;
            height: 70%;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            grid-gap: 10px;
            align-items: center;
          }
        #EventCard {
          display: flex;
            position: relative;
            width: 400px;
            height: 480px;
            flex-direction: column;
            border-radius: 20px;
            cursor: pointer;
            animation: rise-up 2.5s ease-in-out;
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
        #ArrowContainer {
          display: flex;
            position: relative;
            width: 5%;
            height: 480px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        #FrontArrow, #BackArrow {
          display: flex;
            position: relative;
            width: 50px;
            margin: 50% 0;
            cursor: pointer;
        }
        #BackArrow {
          display: none;
        }
        #FrontArrow:hover, #BackArrow:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
          opacity: 0.5;
        }
        @media (max-width: 930px) {
          #EventsBody{
            height: 100%;
          }
          #EventsBodyContainer {
            align-items: center;
          }
          #EventsBodyHeaderContainer {
            margin-top: 15%;
            margin-bottom: 5%;
            align-items: center;
          }
          #EventCardContainer {
            width: 95%;
            flex-direction: column;
            align-items: center;
          }
          #EventCardBodyContainer {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }
          #EventCard{
            width: 100%;
            height: 100%;
          }
          #EventCardImage {
            width: 105%;
          }
          #ArrowContainer {
            height: 150px;
            width: 35%;
            flex-direction: row;
          }
          #FrontArrow, #BackArrow {
            width: 30%;
            margin: 0 20%;
          }
        }

        @media (930px >= width >= 746px) {
          #EventsBody{
            height: 100vh;
          }
          #ArrowContainer {
            margin-top: 5%;
          }
        }
    `]
})
export class EventsBody implements OnInit{

  frontArrow = "assets/rightArrow.png";
  backArrow = "assets/leftArrow.png";
  test = "assets/testEvent.jpg";

    constructor() {}
    ngOnInit() {}

    nextSet() {
      console.log("nextSet");
    }

    redirectFacebook() {
      window.open("https://www.facebook.com/DTKMariamGebriel");
    }
}
