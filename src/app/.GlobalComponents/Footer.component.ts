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
        <a id='Address' href="https://www.google.com/maps/place/22222+Georgia+Ave,+Brookeville,+MD+20833/@39.2215545,-77.0628718,17z/data=!4m6!3m5!1s0x89b7d654762c9989:0x176c779f3bf5bc63!8m2!3d39.2215504!4d-77.0602915!16s%2Fg%2F11bw4j02c0?entry=ttu" target="blank">22222 Gerogia Ave, Brookeville, MD 20833</a>
      </div>
    </div>
    <div id="BottomContainer">
      <div id="EmailContainer">
        <a id='Email' href="https://mail.google.com/mail?view=cm&fs=1&to=kwgzme@yahoo.com&su=Draft" target="blank">kwgzme@yahoo.com</a>
      </div>
      <div id="FooterIconContainer">
        <div id="Youtube">
          <a href="/" target="blank"><span id="Icon" class="fab fa-youtube"></span></a>
        </div>
        <div id="Facebook">
          <a href="/" target="blank"><span id="Icon" class="fab fa-facebook"></span></a>
        </div>
        <div id="Zelle">
        <a href=""><img id='Zelle' src="assets/zelle.webp" alt=""></a>
        </div>
        <div id="Square">
        <a href=""><img id='Square' src="assets/square.jpg" alt=""></a>
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
        position: relative;
        width: 100%;
        height: 80px;
        padding-bottom: 3px;
        padding-top: 3px;
        background-color: black;
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

       #EmailContainer{
        display: flex;
        align-items: center;
        justify-content:center;
        height: 50%;
        padding-bottom: 1px;
       }

       #FooterIconContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 25%;
        padding-right: 25%;
        height: 50%;
        font-size: 21px;
       }

       a {
        text-decoration: none;
        color: white;
       }

       #Address:hover, #Email:hover, #Icon:hover, #Zelle:hover, #Square:hover{
        opacity: 0.8;
        }

       #Youtube{
       }

       #Zelle{
        width: 25px;
        margin-top: 3px;
       }
       #Square{
        width: 24px;
        height: 24px;
        margin-bottom: 3px;
        border-radius: 3px;
        border: 1px solid white;
       }

       #Facebook{
      }

      @media (max-width: 700px){
        #Footer{
          font-size: 13px;
        }
        #FooterIconContainer{
          padding-left: 20%;
          padding-right: 20%;
          font-size: 18px;
        }
      }


    `]
})
export class FooterComponent implements OnInit{
    constructor() {}
    ngOnInit() {}
}
