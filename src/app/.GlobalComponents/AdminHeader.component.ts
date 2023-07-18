import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "AdminHeader",
  template: `
    <div id="Navbar">
      <div id="NavbarContainer">
        <div id="NavbarImageContainer">
          <img id="logo" src="assets/logo.png" alt="LogoPicture" />
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
            <a (click)="navigateTo('/Admin')">Admin Home</a>
            <a (click)="navigateTo('/AdminEvents')">Admin Events</a>
            <a (click)="navigateTo('/AdminGallery')">Admin Gallery</a>
            <a (click)="navigateTo('/AdminMember')">Admin Member</a>
            <a (click)="navigateTo('/AdminLogin')">Admin Logout</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      #Navbar {
        display: flex;
        position: relative;
        width: 100vw;
        height: 10vh;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        background-color: #152238;
        color: white;
        z-index: 10;
      }

      #NavbarContainer {
        display: flex;
        position: relative;
        width: 95%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
      }

      #NavbarImageContainer {
        display: flex;
        position: relative;
        width: 75px;
        height: 75px;
        justify-content: center;
        align-items: center;
      }

      #logo {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
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
      }

      a {
        cursor: pointer;
        font-family: 'InterMedium';
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
          background-color: #152238;
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
          width: 35%;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          padding: 8px 5px;
          margin: 5px;
          border-radius: 10px;
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
export class AdminHeader implements OnInit {
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
