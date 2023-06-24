import { Component, OnInit } from "@angular/core";

@Component({
    selector: "GalleryBody",
    template: `
        <div id="GalleryBody">
            <div id="GalleryBodyContainer">
                <div id="GalleryHeaderContainer">
                     <h1 id="GalleryHeader">Gallery</h1>
                </div>
                <div id="CollectionContainer">
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
                  <div class="Collection" #collection>
                    <div id="CollectionHeaderContainer">
                        <p id='CollectionHeader'>Easter</p>
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
                  <div class="Collection" #collection>
                    <div id="CollectionHeaderContainer">
                        <p id='CollectionHeader'>Imma Bucket</p>
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
                  <div class="Collection" #collection>
                    <div id="CollectionHeaderContainer">
                        <p id='CollectionHeader'>Imma Bucket</p>
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
            </div>
        </div>
        
    `,
    styles: [`
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
        .Collection {
            display: flex;
            position: relative;
            flex-direction: column;
            margin-bottom: 5%;
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
        @media (max-width: 700px) {
          #GalleryHeaderContainer{
              margin-top: 10%;
          }
          #CollectionContainer{
              margin-bottom: 10%;
            }
          #GalleryHeaderContainer, #CollectionHeaderContainer{
              justify-content: center;
              align-items: center;
              text-align: center;
          }
          #CollectionImage{
              width: 300px;
              height: 200px;
          }
        }

    `]
})
export class GalleryBody implements OnInit{

gallery2 = "assets/GalleryEx2.jpg"
gallery3 = "assets/GalleryEx3.jpg"
gallery4 = "assets/GalleryEx4.jpg"
gallery5 = "assets/GalleryEx5.jpg"
gallery6 = "assets/GalleryEx6.jpg"
gallery7 = "assets/GalleryEx7.jpg"
gallery8 = "assets/GalleryEx8.jpg"
gallery9 = "assets/GalleryEx9.jpg"



constructor() {}

ngOnInit() {}



  }
