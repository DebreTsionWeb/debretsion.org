import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "AdminFooter",
    template: `
<div id="Footer">
  <div id="FooterContainer">
    <div id="TopContainer">
    <ul #navbar id="NavbarListContainer" >
            <li id="Home">
              <a (click)="navigateTo('/')">Go to Main Home</a>
            </li>
            <li id="Events">
              <a (click)="navigateTo('/Events')">Go to Main Events</a>
            </li>

          </ul>
    </div>
    <div id="BottomContainer">

    <ul #navbar id="NavbarListContainer" >

            <li id="Gallery">
              <a (click)="navigateTo('/Gallery')">Go to Main Gallery</a>
            </li>
            <li id="Donate">
              <a (click)="navigateTo('/Donate')">Go to Main Donate</a>
            </li>
          </ul>
    </div>
  </div>
</div>
    `,
    styles: [`
       #Footer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px;
        padding-bottom: 1%;
        background-color: #152238;
        color: white;
       }

       #FooterContainer{
        display: flex;
        position: relative;
        width: 95%;
        height: 80%;
        justify-content: space-between;
       }

       #TopContainer{
        display: block;
        position: relative;
        align-items: center;
        width: 100%;
        height: 100%;
       }

       #ChurchNameContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
       }

       #AddressContainer{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content:center;
        height: 50%
       }

       #BottomContainer{
        display: block;
        position: relative;
        align-items: center;
        width: 100%;
        height: 100%;
       }



      @media (max-width: 700px){
        #FooterIconContainer{
          padding-left: 20%;
          padding-right: 20%;
        }
      }

      #NavbarListContainer {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      #NavbarListContainer li {
        margin: 2px;
      }

      #NavbarListContainer li a {
        cursor: pointer;
      }

    `]
})
export class AdminFooter implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
