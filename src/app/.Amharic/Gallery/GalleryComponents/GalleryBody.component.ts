import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collectionData, collection, orderBy, query} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Galleries {
  Name: string;
  URL: string[];
}

@Component({
  selector: "AmharicGalleryBody",
  template: `
    <div id="GalleryBody">
      <div id="GalleryBodyContainer">
        <div id="GalleryHeaderContainer">
          <p id="GalleryHeader">ፎቶግራፎች</p>
        </div>
        <div id="CollectionContainer">
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
      </div>
    </div>
  `,
  styles: [
    `
      #GalleryBody {
        display: flex;
        position: relative;
        width: 100%;
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
      #GalleryBodyContainer {
        display: flex;
        position: relative;
        width: 92%;
        height: 95%;
        flex-direction: column;
      }
      #GalleryHeaderContainer {
        display: flex;
        position: relative;
        flex-direction: column;
      }
      #GalleryHeader {
        display: flex;
        position: relative;
        flex-direction: column;
        margin-top: 5%;
        font-size: 40px;
        animation: slide-in 1.5s ease-in-out;
      }
      #CollectionContainer {
        display: flex;
        position: relative;
        flex-direction: column;
      }
      #Collection {
        display: flex;
        position: relative;
        flex-direction: column;
        margin-bottom: 5%;
        animation: rise-up 2s ease-in-out;
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
        font-family: 'InterMedium';
      }
      #CollectionImagesContainer {
        display: flex;
        position: relative;
        flex-direction: row;
        overflow-x: scroll;
      }
      #CollectionImagesContainer::-webkit-scrollbar {
        height: 0.5em !important;
        background-color: white;
      }
      #CollectionImagesContainer::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
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
      @media (max-width: 700px) {
        #GalleryHeaderContainer {
          margin-top: 10%;
        }
        #CollectionContainer {
          margin-bottom: 10%;
        }
        #GalleryHeaderContainer,
        #CollectionHeaderContainer {
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        #CollectionImage {
          width: 300px;
          height: 200px;
        }
      }
    `,
  ],
})
export class AmharicGalleryBody implements OnInit {

  Gallery$: Observable<Galleries[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const GalleryCollection = collection(this.firestore, 'Gallery');
    const GalleryQuerySnapshot = collectionData(query(GalleryCollection, orderBy('Date', 'desc')));
    this.Gallery$ = GalleryQuerySnapshot as Observable<Galleries[]>;
  }

  ngOnInit() {}

  modalOpen: boolean = false;
  selectedImage: string = '';

  closeModal = () => {
    this.modalOpen = false;
  };

  showModal = (selectedImage: string) => {
    this.selectedImage = selectedImage;
    this.modalOpen = true;
  };
}
