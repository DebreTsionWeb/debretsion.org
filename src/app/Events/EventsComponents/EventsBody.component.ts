import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collectionData, collection, orderBy, query} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Events {
  Name: string,
  Desc: string,
  URL: string,
  Date: string
};

@Component({
    selector: "EventsBody",
    template: `
      <div id="EventsBody">
        <div id="EventsBodyContainer">
          <div id="EventsBodyHeaderContainer">
            <h1 id="EventsBodyHeader">ክስተቶች</h1>
          </div>
          <div id="EventCardContainer">
            <div id="EventCardBodyContainer">

              <div id="EventCard" *ngIf="Event$ | async as event" [style.display]="first ? 'flex' : 'none'">
                <div id="EventCardImageContainer">
                  <ng-container *ngIf="modalOpen; else smallView">
                    <div id="ModalView" (click)="closeModal()">
                      <i
                        id="ModalClose"
                        class="fa fa-solid fa-times"
                        (click)="closeModal()"
                      ></i>
                      <img id="ModalImage" [lazyLoad]="selectedEvent">
                    </div>
                  </ng-container>
                  <ng-template #smallView>
                    <img id="EventCardImageBackground" src={{event[0].URL}}  (click)="showModal(selectedEvent = event[0].URL)">
                    <img id="EventCardImage" [lazyLoad]="event[0].URL" (click)="showModal(selectedEvent = event[0].URL)">
                  </ng-template>
                </div>
                <div id="EventCardTextContainer" (click)="redirectFacebook()">
                  <div id="EventCardTextTopContainer">
                    <p id="EventCardTextTop">{{ event[0].Name }}</p>
                  </div>
                  <div id="EventCardTextBottomContainer">
                    <p id="EventCardTextBottom"><a href="https://facebook.com/DTKMariamGebriel" target="blank"><span id="Icon" class="fab fa-facebook"></span></a>{{ event[0].Desc }}</p>
                  </div>
                </div>
              </div>
              <div id="EventCard" *ngIf="Event$ | async as event" [style.display]="first ? 'flex' : 'none'">
                <div id="EventCardImageContainer">
                  <ng-container *ngIf="modalOpen; else smallView">
                    <div id="ModalView" (click)="closeModal()">
                      <i
                        id="ModalClose"
                        class="fa fa-solid fa-times"
                        (click)="closeModal()"
                      ></i>
                      <img id="ModalImage" [lazyLoad]="selectedEvent">
                    </div>
                  </ng-container>
                  <ng-template #smallView>
                    <img id="EventCardImageBackground" src={{event[1].URL}}  (click)="showModal(selectedEvent = event[1].URL)">
                    <img id="EventCardImage" [lazyLoad]="event[1].URL " (click)="showModal(selectedEvent = event[1].URL)">
                  </ng-template>
                </div>
                <div id="EventCardTextContainer" (click)="redirectFacebook()">
                  <div id="EventCardTextTopContainer">
                    <p id="EventCardTextTop">{{ event[1].Name }}</p>
                  </div>
                  <div id="EventCardTextBottomContainer">
                    <p id="EventCardTextBottom"><a href="https://facebook.com/DTKMariamGebriel" target="blank"><span id="Icon" class="fab fa-facebook"></span></a>{{ event[1].Desc }}</p>
                  </div>
                </div>
              </div>
              <div id="EventCard" *ngIf="Event$ | async as event" [style.display]="first ? 'flex' : 'none'">
                <div id="EventCardImageContainer">
                  <ng-container *ngIf="modalOpen; else smallView">
                    <div id="ModalView" (click)="closeModal()">
                      <i
                        id="ModalClose"
                        class="fa fa-solid fa-times"
                        (click)="closeModal()"
                      ></i>
                      <img id="ModalImage" [lazyLoad]="selectedEvent">
                    </div>
                  </ng-container>
                  <ng-template #smallView>
                    <img id="EventCardImageBackground" src={{event[2].URL}}  (click)="showModal(selectedEvent = event[2].URL)">
                    <img id="EventCardImage" [lazyLoad]="event[2].URL " (click)="showModal(selectedEvent = event[2].URL)">
                  </ng-template>
                </div>
                <div id="EventCardTextContainer" (click)="redirectFacebook()">
                  <div id="EventCardTextTopContainer">
                    <p id="EventCardTextTop">{{ event[2].Name }}</p>
                  </div>
                  <div id="EventCardTextBottomContainer">
                    <p id="EventCardTextBottom"><a href="https://facebook.com/DTKMariamGebriel" target="blank"><span id="Icon" class="fab fa-facebook"></span></a>{{ event[2].Desc }}</p>
                  </div>
                </div>
              </div>

              <div id="EventCardSecond" *ngIf="Event$ | async as event" [style.display]="second ? 'flex' : 'none'">
                <div id="EventCardImageContainer">
                  <ng-container *ngIf="modalOpen; else smallView">
                    <div id="ModalView" (click)="closeModal()">
                      <i
                        id="ModalClose"
                        class="fa fa-solid fa-times"
                        (click)="closeModal()"
                      ></i>
                      <img id="ModalImage" [lazyLoad]="selectedEvent">
                    </div>
                  </ng-container>
                  <ng-template #smallView>
                    <img id="EventCardImageBackground" src={{event[3].URL}}  (click)="showModal(selectedEvent = event[3].URL)">
                    <img id="EventCardImage" [lazyLoad]="event[3].URL " (click)="showModal(selectedEvent = event[3].URL)">
                  </ng-template>
                </div>
                <div id="EventCardTextContainer" (click)="redirectFacebook()">
                  <div id="EventCardTextTopContainer">
                    <p id="EventCardTextTop">{{ event[3].Name }}</p>
                  </div>
                  <div id="EventCardTextBottomContainer">
                    <p id="EventCardTextBottom"><a href="https://facebook.com/DTKMariamGebriel" target="blank"><span id="Icon" class="fab fa-facebook"></span></a>{{ event[3].Desc }}</p>
                  </div>
                </div>
              </div>
              <div id="EventCardSecond" *ngIf="Event$ | async as event" [style.display]="second ? 'flex' : 'none'">
                <div id="EventCardImageContainer">
                  <ng-container *ngIf="modalOpen; else smallView">
                    <div id="ModalView" (click)="closeModal()">
                      <i
                        id="ModalClose"
                        class="fa fa-solid fa-times"
                        (click)="closeModal()"
                      ></i>
                      <img id="ModalImage" [lazyLoad]="selectedEvent">
                    </div>
                  </ng-container>
                  <ng-template #smallView>
                    <img id="EventCardImageBackground" src={{event[4].URL}}  (click)="showModal(selectedEvent = event[4].URL)">
                    <img id="EventCardImage" [lazyLoad]="event[4].URL" (click)="showModal(selectedEvent = event[4].URL)">
                  </ng-template>
                </div>
                <div id="EventCardTextContainer" (click)="redirectFacebook()">
                  <div id="EventCardTextTopContainer">
                    <p id="EventCardTextTop">{{ event[4].Name }}</p>
                  </div>
                  <div id="EventCardTextBottomContainer">
                    <p id="EventCardTextBottom"><a href="https://facebook.com/DTKMariamGebriel" target="blank"><span id="Icon" class="fab fa-facebook"></span></a>{{ event[4].Desc }}</p>
                  </div>
                </div>
              </div>
              <div id="EventCardSecond" *ngIf="Event$ | async as event" [style.display]="second ? 'flex' : 'none'">
                <div id="EventCardImageContainer">
                  <ng-container *ngIf="modalOpen; else smallView">
                    <div id="ModalView" (click)="closeModal()">
                      <i
                        id="ModalClose"
                        class="fa fa-solid fa-times"
                        (click)="closeModal()"
                      ></i>
                      <img id="ModalImage" [lazyLoad]="selectedEvent">
                    </div>
                  </ng-container>
                  <ng-template #smallView>
                    <img id="EventCardImageBackground" src={{event[5].URL}}  (click)="showModal(selectedEvent = event[5].URL)">
                    <img id="EventCardImage" [lazyLoad]="event[5].URL " (click)="showModal(selectedEvent = event[5].URL)">
                  </ng-template>
                </div>
                <div id="EventCardTextContainer" (click)="redirectFacebook()">
                  <div id="EventCardTextTopContainer">
                    <p id="EventCardTextTop">{{ event[5].Name }}</p>
                  </div>
                  <div id="EventCardTextBottomContainer">
                    <p id="EventCardTextBottom"><a href="https://facebook.com/DTKMariamGebriel" target="blank"><span id="Icon" class="fab fa-facebook"></span></a>{{ event[5].Desc }}</p>
                  </div>
                </div>
              </div>

            </div>
            <div id="ArrowContainer">
              <!-- Didnt feel like doing numbers dont judge me -->
              <img id="BackArrow" (click)="backSet()" [lazyLoad]="backArrow" [style.display]="first ? 'none' : 'flex'">
              <img id="FrontArrow" (click)="nextSet()" [lazyLoad]="frontArrow" [style.display]="first ? 'flex' : 'none'">
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
        #First, #Second {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        #EventCard, #EventCardSecond {
          display: flex;
          position: relative;
          width: 400px;
          height: 480px;
          flex-direction: column;
          border-radius: 20px;
          cursor: pointer;
          animation: rise-up 1.5s ease-in-out;
          border: 1px solid black;
        }
        #EventCardSecond {
          display: none;
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
          #EventCard, #EventCardSecond {
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

        @media (max-width: 930px) and (min-width: 746px) {
          #EventsBody{
            height: 110vh;
          }
          #ArrowContainer {
            margin-top: 5%;
          }
        }

        @media (max-width: 1400px) and (min-width: 930px) {
          #EventsBody{
            height: 140vh;
          }
        }
    `]
})
export class EventsBody implements OnInit{

  frontArrow = "assets/rightArrow.png";
  backArrow = "assets/leftArrow.png";

  Event$: Observable<Events[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const EventCollection = collection(this.firestore, 'Events');
    const querySnapshot = collectionData(query(EventCollection, orderBy('Date', 'desc')));
    this.Event$ = querySnapshot as Observable<Events[]>;
  }
  ngOnInit() {}


  modalOpen: boolean = false;
  first: boolean = true;
  second: boolean = false;
  selectedEvent: string = '';


  showModal = (selectedEvent: string) => {
    this.selectedEvent = selectedEvent;
    this.modalOpen = true;
  };

  closeModal = () => {
    this.modalOpen = false;
  };

  nextSet() {
    this.first = false;
    this.second = true;
  }

  backSet() {
    this.first = true;
    this.second = false;
  }

  redirectFacebook() {
    window.open("https://www.facebook.com/DTKMariamGebriel");
  }
}
