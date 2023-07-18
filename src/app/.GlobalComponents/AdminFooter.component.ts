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
            <li id="Member">
              <a (click)="navigateTo('/Member')">Go to Main Member</a>
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
        position: relative;
        width: 100vw;
        height: 10vh;
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
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
       }

      #BottomContainer {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }

      #NavbarListContainer {
        display: flex;
        position: relative;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      #NavbarListContainer li {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        margin: 2px;
      }

      #NavbarListContainer li a {
        cursor: pointer;
        font-size: 0.9em;
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
