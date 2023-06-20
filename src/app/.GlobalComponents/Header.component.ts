import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "Header",
  template: `
    <div id="Navbar">
      <div id="NavbarContainer">
        <div id="NavbarImageContainer">
          <img id="logo" src="assets/logo.png" alt="LogoPicture" />
        </div>
        <div id="NavbarTextContainer">
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
          <ul #navbar id="NavbarListContainer" [ngClass]="{ 'show': isNavbarOpen }">
            <li id="Home">
              <a (click)="navigateTo('/')">Home</a>
            </li>
            <li id="About">
              <a (click)="navigateTo('/About')">About Us</a>
            </li>
            <li id="Events">
              <a (click)="navigateTo('/Events')">Events</a>
            </li>
            <li id="Live">
              <a (click)="navigateTo('/Live')">Live</a>
            </li>
            <li id="Gallery">
              <a (click)="navigateTo('/Gallery')">Gallery</a>
            </li>
            <li id="Donate">
              <a (click)="navigateTo('/Donate')">Donate</a>
            </li>
            <li id="Contact">
              <a (click)="navigateTo('/Contact')">Contact Us</a>
            </li>
          </ul>
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
        margin-top: 5px;
      }

      #NavbarTextContainer {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 70%;
      }

      #NavbarListContainer {
        display: flex;
        position: relative;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
      }

      #NavbarListContainer li a {
        cursor: pointer;
      }

      #NavbarListContainer li a:hover {
        opacity: 0.5;
      }

      #NavbarListContainer li {
        list-style: none;
      }

      #bars {
        display: none;
      }

      #close {
        display: none;
      }

      @media (max-width: 700px) {
        #bars {
          display: flex;
          font-size: 38px;
        }

        #close {
          display: none;
          font-size: 38px;
          margin-left: 10
          px;
        }

        #NavbarListContainer {
          display: none;
        }

        #NavbarListContainer.show {
          display: block;
        }

        #Home {
        }

        #Home:hover {
          opacity: 0.5;
        }

        #Events {
        }

        #Events:hover {
          opacity: 0.5;
        }
        #Live {
        }

        #Live:hover {
          opacity: 0.5;
        }

        #About {
        }

        #About:hover {
          opacity: 0.5;
        }

        #Gallery {
        }

        #Gallery:hover {
          opacity: 0.5;
        }

        #Contact {
        }

        #Contact:hover {
          opacity: 0.5;
        }
      }

      .show {
        display: block !important;
      }

      .hide {
        display: none;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
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
