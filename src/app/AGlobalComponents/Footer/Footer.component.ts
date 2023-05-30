import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Footer",
    template: `
        <div id="Footer">
  <div id="FooterContainer">
    <div id="FooterTextContainer">
      <p id="FooterText">
        <a href="/" target="blank" id="TermsLink">Terms & Conditions</a>
        " - "
        <a href="/" target="blank" id="PolicyLink">Privacy Policy</a>
      </p>
    </div>
    <div id="FooterIconContainer">
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
        .Footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            height: 200px;
            background-color: black;
            border-bottom: 1px solid #ccc;
        }
        .Footer__logo img {

        }
        .Footer__title h1 {

        }
    `]
})
export class FooterComponent implements OnInit{
    constructor() {}
    ngOnInit() {}
}
