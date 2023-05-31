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
       
    `]
})
export class FooterComponent implements OnInit{
    constructor() {}
    ngOnInit() {}
}
