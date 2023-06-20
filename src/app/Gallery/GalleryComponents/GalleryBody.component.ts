import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from "@angular/core";

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
                        <img id='CollectionImage' src="assets/GalleryEx2.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx3.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx4.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx5.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx6.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx7.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx8.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx9.jpg" alt="">
                    </div>
                  </div>
                  <div class="Collection" #collection>
                    <div id="CollectionHeaderContainer">
                        <p id='CollectionHeader'>Easter</p>
                    </div>
                    <div id="CollectionImagesContainer">
                        <img id='CollectionImage' src="assets/GalleryEx2.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx3.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx4.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx5.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx6.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx7.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx8.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx9.jpg" alt="">
                    </div>
                  </div>
                  <div class="Collection" #collection>
                    <div id="CollectionHeaderContainer">
                        <p id='CollectionHeader'>Imma Bucket</p>
                    </div>
                    <div id="CollectionImagesContainer">
                        <img id='CollectionImage' src="assets/GalleryEx2.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx3.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx4.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx5.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx6.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx7.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx8.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx9.jpg" alt="">
                    </div>
                  </div>
                  <div class="Collection" #collection>
                    <div id="CollectionHeaderContainer">
                        <p id='CollectionHeader'>Imma Bucket</p>
                    </div>
                    <div id="CollectionImagesContainer">
                        <img id='CollectionImage' src="assets/GalleryEx2.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx3.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx4.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx5.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx6.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx7.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx8.jpg" alt="">
                        <img id='CollectionImage' src="assets/GalleryEx9.jpg" alt="">
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
            /* animation: fade-in 1.5s ease-in-out; */
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
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
export class GalleryBody implements OnInit, AfterViewInit{
  @ViewChildren('collection') collections!: QueryList<ElementRef>;
    constructor() {}
    ngOnInit() {}
    ngAfterViewInit() {
      const collectionElements = this.collections.toArray().map(collectionRef => collectionRef.nativeElement);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadCollection(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    collectionElements.forEach(collectionElement => observer.observe(collectionElement));
  }

    loadCollection(collection: Element) {
      collection.classList.add("fade-in");
    }
  }
