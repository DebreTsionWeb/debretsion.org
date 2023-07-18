import { Component, OnInit, ViewChild, ElementRef, inject } from "@angular/core";
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'AdminGallery',
  template: `

    <div id='AuthContainer'>
        <ng-container *ngIf="login === true">
          <AdminLogin></AdminLogin>
        </ng-container>

        <ng-container *ngIf="loggedIn === true">
          <AdminHeader></AdminHeader>
          <div id="AdminGallery">
            <div id="AdminGalleryContainer">
              <div id="CreateGalleryContainer">
                <div id="CreateGalleryHeaderContainer">
                  <p id="CreateGalleryHeader">Admin Gallery</p>
                </div>
                <div id="CreateGalleryForm">
                  <div id="CreateGalleryTitleContainer">
                    <input id='CreateGalleryTitle' matInput [(ngModel)]="Title" placeholder="Enter Gallery Title" required>
                  </div>
                  <div id="AddGalleryImgURLContainer">
                    <button id='AddGalleryImgURL' mat-raised-button color="primary" (click)="addGallery()">Add Another Image</button>
                  </div>
                  <div id="CreateGalleryImgURLContainer" >
                    <input id='CreateGalleryImgURL' *ngFor="let i of count" matInput [(ngModel)]="Gallery[i]" placeholder="Enter Gallery Img URL" required>
                  </div>
                </div>
                <div id="SubmitErrorContainer">
                  <p id="SubmitError" #SubmitError>Please Fill Out All Fields</p>
                </div>
                <div id="SubmitGalleryButtonContainer">
                  <button id='SubmitGalleryButton' mat-raised-button color="primary" (click)="submitGallery()">Submit Gallery</button>
                  <p id="Success" #Success>Gallery Created Successfully</p>
                </div>
              </div>


              <div id="GalleryPreviewContainer">
                <div id="Collection">
                  <div id="CollectionHeaderContainer">
                    <p id="CollectionHeader">{{ Title }}</p>
                  </div>
                  <div id="CollectionImagesContainer">
                    <ng-container *ngFor="let url of Gallery">
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
        #AdminGallery {
          display: flex;
          position: relative;
          width: 100%;
          height: 80%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #AdminGalleryContainer {
          display: flex;
          position: relative;
          width: 90%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        #CreateGalleryContainer {
          display: flex;
          position: relative;
          width: 50%;
          height: 80%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #CreateGalleryHeaderContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 10%;
          justify-content: center;
          align-items: center;
        }
        #CreateGalleryHeader {
          font-size: 30px;
          font-family: 'InterBold';
        }
        #CreateGalleryForm {
          display: flex;
          position: relative;
          width: 100%;
          height: 80%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #CreateGalleryTitleContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 20%;
          margin: 10px;
          justify-content: center;
          align-items: center;
        }
        #CreateGalleryTitle {
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
        #CreateGalleryImgURLContainer {
          display: flex;
          position: relative;
          width: 380px;
          height: 250px;
          margin-bottom: 10px;
          margin-top: 5px;
          flex-direction: column;
          align-items: center;
          overflow-y: scroll;
          border: 1px solid black;
        }
        #CreateGalleryImgURLContainer::-webkit-scrollbar {
          width: 0.5em;
          background-color: white;
        }
        #CreateGalleryImgURLContainer::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 1% / 90%;
        }
        #CreateGalleryImgURL {
          display: flex;
          position: relative;
          width: 90%;
          height: 20px;
          border-radius: 5px;
          border: 1px solid black;
          padding: 15px;
          margin-bottom: 10px;
          font-size: 16px;
          font-family: 'Inter';
        }
        #AddGalleryImgURLContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 20%;
          margin: 10px;
          justify-content: center;
          align-items: center;
        }
        #AddGalleryImgURL {
          display: flex;
          position: relative;
          width: 50%;
          height: 100%;
          border-radius: 5px;
          border: 1px solid black;
          font-size: 18px;
          font-family: 'InterBold';
        }
        #SubmitErrorContainer {
          display: flex;
          position: relative;
          width: 50%;
          height: 10%;
          justify-content: center;
          align-items: center;
        }
        #SubmitError {
          display: none;
          position: relative;
          font-size: 18px;
          justify-content: center;
          align-items: center;
          color: red;
        }
        #SubmitGalleryButtonContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 20%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #SubmitGalleryButton {
          display: flex;
          position: relative;
          width: 200px;
          height: 75px;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          border: 1px solid black;
          font-size: 18px;
          font-family: 'InterBold';
          margin-bottom: 10px;
        }
        #Success {
          display: none;
        }
        #GalleryPreviewView {
          display: flex;
          position: relative;
          width: 50%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        #GalleryPreviewContainer {
          display: flex;
          position: relative;
          width: 50%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #Collection {
          display: flex;
          position: relative;
          flex-direction: column;
          width: 100%;
          height: 390px;
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
          font-family: 'InterMedium';
        }
        #CollectionImagesContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          flex-direction: row;
          overflow-x: scroll;
        }
        #CollectionImagesContainer::-webkit-scrollbar {
          height: 0.5em;
          background-color: white;
        }
        #CollectionImagesContainer::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 1% / 90%;
        }
        #CollectionImage {
          display: flex;
          position: relative;
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
        @media (max-width: 1050px) {
          #AuthContainer {
            height: 135vh;
            justify-content: center;
            margin-top: -28px;
          }
          #AdminGalleryContainer {
            flex-direction: column;
            margin-top: 100px;
            margin-bottom: 100px;
          }
          #CreateGalleryContainer {
            width: 90%;
          }
          #GalleryPreviewContainer {
            width: 380px;
            height: 300px;
          }
          #Collection {
            width: 380px;
            height: 300px;
          }
          #CollectionImagesContainer {
            height: 250px;
          }
          #CollectionImage {
            height: 200px;
          }
        }
  `]
})

export class AdminGallery implements OnInit {

  @ViewChild('SubmitError', { static: false }) SubmitErrorRef!: ElementRef;
  @ViewChild('Success', { static: false }) successRef!: ElementRef;
  private firestore: Firestore = inject(Firestore);


  login: boolean = true;
  loggedIn: boolean = false;
  Name: string = "";
  Password: string = "";

  Title: string = "";
  ImgURL: string = "";
  Gallery: string[] = [];
  count: any[] = [0];


  addGallery() {
    this.count.push(this.count.length);
    console.log(this.count);
    this.Gallery.push('');
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

  submitGallery() {
    if (this.Title === "" || this.Gallery.length === 0) {
      this.SubmitErrorRef.nativeElement.style.display = "flex";
      setTimeout(() => {
        this.SubmitErrorRef.nativeElement.style.display = "none";
      }, 3000);
    } else {
      addDoc(collection(this.firestore, "Gallery"), {
        Name: this.Title,
        URL: this.Gallery.filter(url => url !== ''),
        Date: new Date()
      });

      this.successRef.nativeElement.style.display = "flex";
      setTimeout(() => {
        this.successRef.nativeElement.style.display = "none";
      }, 3000);
      this.Title = "";
      this.Gallery = [];
      this.count = [0];
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

