import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "AmharicHeader",
  template: `
    <div id="Navbar">
      <div id="NavbarContainer">
        <div id="NavbarImageContainer">
          <img id="NavbarImage" src="assets/logo.png" alt="LogoPicture" (click)="navigateTo('/')"/>
          <button mat-raised-button id='LanguageSwitch' (click)="navigateTo('/en')">English</button>
        </div>
        <div id="NavbarTextContainer" [ngClass]="{ 'show': isNavbarOpen }">
          <i
            id="bars"
            class="fa fa-solid fa-bars"
            (click)="toggleNavbar()"
            [ngClass]="{ hide: isNavbarOpen }"
          ></i>
          <i
            id="close"
            class="fa fa-solid fa-times"
            (click)="toggleNavbar()"
            [ngClass]="{ hide: !isNavbarOpen }"
          ></i>
          <div #navbar id="NavbarListContainer" [ngClass]="{ 'show': isNavbarOpen }">
            <a (click)="navigateTo('/')">መግቢያ</a>
            <a (click)="navigateTo('/About')">ስለ እኛ</a>
            <a (click)="navigateTo('/Events')">ክስተቶች</a>
            <a id='Live' (click)="navigateTo('/Live')">ቀጥታ ሥርጭት</a>
            <a (click)="navigateTo('/Gallery')">ፎቶግራፎች</a>
            <a href="https://www.zeffy.com/en-US/ticketing/8b37c24f-a593-4754-a691-d09a7b1a2628">አባላት</a>
            <a (click)="navigateTo('/Donate')">ለግሱ</a> <!-- አባልነት -->
            <a (click)="navigateTo('/Contact')">አግኙን</a>
            <a id='MobileLanguageSwitch' (click)="navigateTo('/en')">English</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      #Navbar {
        display: flex;
        position: sticky;
        width: 100%;
        height: 81px;
        border-bottom: 1px solid black;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        background-color: whitesmoke;
        z-index: 10;
      }

      #NavbarContainer {
        display: flex;
        position: relative;
        width: 95%;
        height: 100%;
        justify-content: space-between;
      }

      #NavbarImageContainer {
        display: flex;
        position: relative;
        width: 200px;
        height: 75px;
        justify-content: center;
        align-items: center;
      }

      #NavbarImage {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        margin-top: 5px;
        cursor: pointer;
      }

      #LanguageSwitch {
        display: flex;
        position: relative;
        width: 300px;
        height: 60%;
        margin-top: 5px;
        justify-content: center;
        align-items: center;
        border-radius: 55px;
        background-color: #2978e6;
        color: white;
        margin-left: 20px;
        font-family: 'InterMedium';
        font-size: 14px;
        cursor: pointer;
      }

      #LanguageSwitch:hover {
        opacity: 0.8;
      }

      #MobileLanguageSwitch {
        display: none;
      }

      #NavbarTextContainer {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 50%;
      }

      #NavbarListContainer {
        display: flex;
        position: relative;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
      }

      a {
        cursor: pointer;
        font-family: 'InterMedium';
      }

      .mdc-button {
        letter-spacing: normal !important;
        font-size: 16px;
      }

      a:hover {
        opacity: 0.5;
      }

      #bars {
        display: none;
      }

      #close {
        display: none;
      }

      @media (max-width: 1100px) {

        #bars {
          display: flex;
          position: absolute;
          right: 10%;
          font-size: 38px;
          cursor: pointer;
        }

        #close {
          display: none;
          font-size: 38px;
          cursor: pointer;
          margin-bottom: 15px;
        }

        #NavbarListContainer {
          display: none;
        }

        #NavbarTextContainer.show {
          display: flex;
          position: absolute;
          top: 0;
          left: -2.6%;
          width: 105.1%;
          height: 350%;
          margin-right: 0;
          flex-direction: column;
          background-color: whitesmoke;
          border-radius: 0 0 20px 20px;
          overflow: hidden;
          border: 1px solid black;
        }

        #NavbarListContainer.show {
          display: flex;
          width: 100%;
          height: 60%;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }

        #NavbarListContainer.show a {
          display: flex;
          width: 25%;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          border: 1px solid black;
          padding: 8px 5px;
          margin: 5px;
          border-radius: 10px;
        }

        #NavbarListMember {
          width: 26% !important;
          padding: 19px 55px !important;
        }

        #Live {
          font-size: 16px !important;
        }

        #NavbarListContainer.show a:hover {
          opacity: 0.7;
        }

        #MobileLanguageSwitch {
          display: flex;
        }

      }

      .show {
        display: flex !important;
      }

      .hide {
        display: none;
      }
    `,
  ],
})
export class AmharicHeaderComponent implements OnInit {
    isNavbarOpen = false;

    constructor(private router: Router) {}

    ngOnInit() {}

    navigateTo(route: string): void {
      this.router.navigate([route]);
    }

    toggleNavbar(): void {
      this.isNavbarOpen = !this.isNavbarOpen;

      const barsIcon = document.getElementById("bars");
      if (barsIcon) {
        barsIcon.style.display = this.isNavbarOpen ? "none" : "flex";
      }

      const closeIcon = document.getElementById("close");
      if (closeIcon) {
        closeIcon.style.display = this.isNavbarOpen ? "flex" : "none";
      }
    }
  }
