import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Footer",
    template: `
<div id="Footer">
  <div id="FooterContainer">
    <div id="TopContainer">
      <div id="ChurchNameContainer">
        <p>Debre Tsion EOTC</p>
      </div>
      <div id= "AddressContainer">
        <p>22222 Gerogia Ave, Brookeville, MD 20833</p>
      </div>
    </div>
    <div id="BottomContainer">
      <div id="EmailContainer">
        <a href="https://mail.google.com/mail?view=cm&fs=1&to=kwgzme@yahoo.com&su=Draft" target="blank">kwgzme@yahoo.com</a>
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
        width: 100%;
        height: 80px;
        padding-bottom: 1%;
        font-family: "Inter", sans-serif;
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
        /* border: 1px solid green; */
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

       #EmailContainer{
        display: flex;
        align-items: center;
        justify-content:center;
        height: 50%;
       }

       #FooterIconContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 25%;
        padding-right: 25%;
        height: 50%;
       }

       #Youtube{
       }

       #Instagram{
       }

       #Facebook{
      }

      @media (max-width: 700px){
        #FooterIconContainer{
          padding-left: 20%;
          padding-right: 20%;
        }
      }

       
    `]
})
export class FooterComponent implements OnInit{
    constructor() {}
    ngOnInit() {}
}
