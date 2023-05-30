import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Header",
    template: `
        <div id="Navbar">
      <div id="NavbarContainer">
        <div id="NavbarTextContainer">
          <ul id="NavbarListContainer">
            <li id="Home">
              <a href="/">Home</a>
            </li>
            <li id="VisitUs">
              <a href="/">Visit Us</a>
            </li>
            <li id="Appointment">
              <a href="/">Appointment</a>
            </li>
            <li id="LiveGallery">
              <a href="/">Live Gallery</a>
            </li>
            <li id="ContactUs">
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div id="NavbarIconContainer">
          <div id="Youtube">
            <a href="/" target="blank"></a>
          </div>
          <div id="Instagram">
            <a href="/" target="blank"></a>
          </div>
          <div id="Facebook">
            <a href="/" target="blank"></a>
          </div>
        </div>
      </div>
    </div>

    `,
    styles: [`
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            height: 60px;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
        }
        .header__logo img {

        }
        .header__title h1 {

        }
    `]
})
export class HeaderComponent implements OnInit{
    constructor() {}
    ngOnInit() {}
}
