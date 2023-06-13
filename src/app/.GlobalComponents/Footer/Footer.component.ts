import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Footer",
    template: `
<div id="Footer">
  <div id="FooterContainer">
    <div id="ChurchNameContainer">
      <p>Debre Tsion EOTC</p>
    </div>
    <div id="EmailContainer">
      <a href="https://mail.google.com/mail?view=cm&fs=1&to=kwgzme@yahoo.com&su=Draft" target="blank">kwgzme@yahoo.com</a>
    </div>
    <div id= "AddressContainer">
      <p>22222 Gerogia Ave, Brookeville, MD 20833</p>
    </div>
    <div id="FooterIconContainer">
      <div id="Youtube">
        <a href="/" target="blank"><span id="Icon" class="fab fa-youtube"></span></a>
      </div>
      <div id="Instagram">
        <a href="/" target="blank"><span id="Icon" class="fab fa-instagram"></span></a>
      </div>
      <div id="Facebook">
        <a href="/" target="blank"><span id="Icon" class="fab fa-facebook"></span></a>
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
