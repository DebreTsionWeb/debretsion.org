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
        <div id="NavbarTextContainer">
          <i
            id="bars"
            class="fa fa-solid fa-bars"
            (click)="toggleNavbar()"
          ></i>
          <i
            id="close"
            class="fa fa-solid fa-times"
            (click)="toggleNavbar()"
          ></i>
          <ul #navbar id="NavbarListContainer" >
            <li id="Home">
              <a (click)="navigateTo('/AdminHome')">Home</a>
            </li>
            <li id="Events">
              <a (click)="navigateTo('/AdminEvents')">Events</a>
            </li>
            <li id="Gallery">
              <a (click)="navigateTo('/AdminGallery')">Gallery</a>
            </li>
            <li id="Member">
              <a (click)="navigateTo('/AdminMember')">Member</a>
            </li>
            <li id="Login">
              <a (click)="navigateTo('/AdminLogin')">Login</a>
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
        position: fixed;
        width: 100%;
        height: 80px;
        left: 0;
        top: 0;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        background-color: #152238;
        color: white;
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
      }

      #logo {
        display: flex;
        position: relative;
        width: 100%;
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
