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
                <video id='BackgroundVideo' muted autoplay>
                  <source src="https://rr1---sn-vgqsrn66.googlevideo.com/videoplayback?expire=1689655277&ei=jcO1ZNLSCK6N_9EPktKOwAg&ip=45.139.56.252&id=o-AIj__Ck5F3WUShDW4ULOMdDJIixiGMjmn8ny4FJTlfGB&itag=137&aitags=134%2C136%2C137%2C160%2C243&source=youtube&requiressl=yes&spc=Ul2Sq99GOhtqU80dIvKnNzmBsKkuDIjCS5kX2hq0wQ&vprv=1&svpuc=1&mime=video%2Fmp4&ns=ByuNdhklN2p4bdp3muE5m9kO&gir=yes&clen=167578558&dur=448.233&lmt=1688089853196743&keepalive=yes&fexp=24007246,24350017,51000012&beids=24350017&c=WEB&txp=6219224&n=QHqR2thKLaLzcg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAMD3q3J83WQGKHruQsDjvu331rpIVuYgJqjbGUGNo6FFAiEA8_aeVSbtnHjLo1suWRu1oq-7KD8UJMI5vUdIxNLI9ng%3D&redirect_counter=1&cm2rm=sn-ab5ely76&req_id=d323ba2d100fa3ee&cms_redirect=yes&cmsv=e&mh=OB&mip=71.191.242.196&mm=34&mn=sn-vgqsrn66&ms=ltu&mt=1689633411&mv=m&mvi=1&pl=19&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAIre0wsXkk4Uw5nmV3HFxbLxw8rwBwKqlOmusCV9-8kPAiEAixtJq01ykkYClgdY6K5LIV7qM6FNqasWfcnPNahh3bk%3D">
                </video>
                <div id="HeroImageContainer">
                  <!-- <img src="assets/ExampleAboutImg.jpg" id="HeroImage"/> -->
                </div>
                <div id="HeroTextContainer">
                  <div id="HeroHeaderContainer">
                    <p id="HeroHeader">ደብረ ጽዮን ቅ/ማርያም ወ ቅ/ገብርኤል ኢ.ኦ.ተ.ቤ ብሩክቪል ሜሪላንድ</p>
                  </div>
                  <div id="HeroSubHeaderContainer">
                    <p id="HeroSubText">መዝሙር ፸፯÷፷፰
                    "የወደደውን የጽዮንን ተራራ።
                    መቅደሱን እንደ አርያም ሠራ፥
                    ለዘላለምም በምድር ውስጥ መሠረታት።
                    <br>
                    የተለያዩ ድኅረ ገጾችን ለማየት ወደ ታች ይሸብልሉ(ክስተቶች፣ አካባቢ፣ ቀጥታ ሥርጭት፣ አባልነት/ልገሳ)!
                    </p>
                  </div>
                </div>
              </div>
              <div id="Blur"></div>
            </div>

            <div id="HomeAboutContainer">
              <div id="HomeAboutHeaderContainer">
                <p id="HomeAboutHeader">አመሠራረት</p>
              </div>
              <div id="HomeAboutSubTextContainer">
                <p id="HomeAboutSubText">አስተዳዳራዊ መዋቅር ደብረ ጽዮን ቅድሰት ማርያም ወቅዱስ ገብርኤል የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርሰቲያን በሊቀ ኅሩያን ቄስ ከፈለኝ ወልደ ጊዮርጊስ ሰኔ 21 ቀን 2006 ዓ.ም ( እ.ኤ.አ ጁን 28 / 2014 ) በሜሪላንድ ስቴት በሲልቨር ስፕሪንግ ከተማ በኪራይ ቤተ ክርስቲያን ውስጥ ተመሰረተች። የደብረ ጽዮን ቅድስት ማርያም ወቅዱስ ገብርኤል ቤተ ክርስቲያን በዋሽንግተን ዲሲና አካባቢው ሀገረ ስብከት ሊቀ ጳጳስ በብጹዕ አቡነ ፋኑኤል ተባርካ አገልግሎት መስጠት ከጀመረችበት ጊዜ ጀምሮ ከጊዜ ወደ ጊዜ በምታሳየው ፈጣን ለውጥ፣ በንብረትና በምዕመናን ብዛት እንዲሁም በመንፈሳዊ አገልግሎት እያደገች በመምጣቷ በስድስት ዓመት ዕድሜዋ ሰኔ 3 / 2012 ዓ.ም ( እ.ኤ.አ. ጁን 10 / 2020 ) የራሷን ህንፃ ቤተክርስቲያን በመግዛት እዚህ ላይ ደርሳለች::</p>
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
                <iframe id='HomeLocationMap' src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3yT_4rYS-Yn7C8XucfB3jvn1tcG1dZZk&q=22222+Georgia+Ave,+Brookeville,+MD+20833"></iframe>
              </div>
            </div>

            <div id="HomeEventsContainer">
              <ng-container *ngIf="isMobile; else desktopView">
                <div id="MobileHomeEventsHeaderContainer">
                  <p id="MobileHomeEventsHeader">Events</p>
                </div>
                <div id="MobileHomeEventsImageContainer" *ngIf="Event$ | async as event">
                  <img id="HomeEventsImage" [lazyLoad]="event[0].URL" />
                </div>
                <div id="MobileHomeEventsParagraphContainer">
                  <p id="MobileHomeEventsParagraph">ያለፉት በዓላት እና በቅርብ ጊዜ የሚደርሱ ክስተቶች በዚህ ገጽ ላይ ይገኛሉ</p>
                </div>
                <div id="MobileHomeEventsButtonContainer">
                  <button id="MobileHomeEventsButton" (click)="navigateTo('/Events')">View All Events</button>
                </div>
              </ng-container>
              <ng-template #desktopView>
                <div id="HomeEventsImageContainer" *ngIf="Event$ | async as event">
                  <img [lazyLoad]="event[0].URL" id="HomeEventsImage" (click)="redirectFB()"/>
                </div>
                <div id="HomeEventsTextContainer">
                  <div id="HomeEventsHeaderContainer">
                    <p id="HomeEventsHeader">ያለፉት በዓላት</p>
                  </div>
                  <div id="HomeEventsParagraphContainer">
                    <p id="HomeEventsParagraph">ያለፉት በዓላት እና በቅርብ ጊዜ የሚደርሱ ክስተቶች በዚህ ገጽ ላይ ይገኛሉ</p>
                  </div>
                  <div id="HomeEventsButtonContainer">
                    <button id="MobileHomeEventsButton" (click)="navigateTo('/Events')">View All Events</button>
                  </div>
                </div>
              </ng-template>
            </div>

            <div id="HomeGalleryContainer">
              <div id="HomeGalleryHeaderContainer">
                <p id="HomeGalleryHeader">በቅርብ የወጡ</p>
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
                <button id="HomeGalleryButton" (click)="navigateTo('/Gallery')">View All Galleries</button>
              </div>
            </div>

            <div id="HomeDonateContainer">
              <div id="HomeDonateHeaderContainer">
                  <p id="HomeDonateHeader">ለግሱ</p>
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
            margin-bottom: 20px;
        }

        #HeroVideoContainer {
            display: flex;
            position: absolute;
            width: 99.5vw;
            height: 94vh;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        #BackgroundVideo {
            display: flex;
            position: absolute;
            width: 200%;
            height: 200%;
            filter: brightness(50%);
        }

        #Blur {
            display: flex;
            position: absolute;
            bottom: -50px;
            width: 99.5vw;
            height: 5%;
            background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        }

        #HeroImageContainer {
            display: flex;
            position: relative;
            width: 50%;
            height: 95%;
            justify-content: center;
            align-items: center;
            z-index: 3;
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
            z-index: 3;
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

        #Zelle {
          margin-right: 15px;
        }

        #Square {
          margin-left: 15px;
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

  isMobile: boolean = window.innerWidth <= 850;

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
