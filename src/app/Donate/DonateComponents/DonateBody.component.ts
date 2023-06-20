import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
    selector: "DonateBody",
    template: `
        <div id="DonateBody" class="fade-in">
          <div id="PaymentContainer">
            <div id="PaymentHeaderContainer">
              <h1 id="PaymentHeader">Donate</h1>
            </div>
            <div id="OptionsContainer">
              <div id="Options">
              <a target=blank href=''><img id="Paypal" src='assets/paypal.png'/></a>
              </div>
            </div>
          </div>
          <div id="DonateBodyContainer">
            <div id="DonateHeaderContainer">
              <h1 id="DonateHeader">Mission Statement</h1>
            </div>
            <div id="InfoContainer">
              <p id="Address">Paragraph</p>
            </div>
          </div>
        </div>

    `,
    styles: [`
        #DonateBody {
            display: flex;
            position: relative;
            width: 100%;
            height: 90vh;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            animation: fade-in 1.5s ease-in-out;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        #DonateBodyContainer {
            display: flex;
            width: 30%;
            height: 500px;
            flex-direction: column;
            align-items: center;
            text-align: right;
        }
        #DonateHeaderContainer {
            display: flex;
            width: 90%;
            justify-content: flex-end;
        }
        #DonateHeader {
          text-align: right;
          font-size: 40px;
        }
        #InfoContainer {
          display: flex;
          width: 90%;
          flex-direction: column;
          font-size: 20px;
        }
        #Address {

        }
        #PhoneNumber {

        }
        #Email {

        }
        #PaymentContainer {
          display: flex;
          width: 50%;
          height: 600px;
          flex-direction: column;
        }
        #PaymentHeaderContainer {
            display: flex;
            width: 100%;
            height: 20%;
            justify-content: center;
        }
        #PaymentHeader {
          font-size: 40px;
        }
        #OptionsContainer {
          display: flex;
          width: 100%;
          height: 100%;
        }
        #Options {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          border: 1px solid grey;
          border-radius: 5px;
        }
        #Paypal {
          display: flex;
          width: 25px;
        }
        @media (max-width: 700px) {
          #DonateBody {
            flex-direction: column;
            height: 150vh;
          }
          #DonateBodyContainer {
            width: 90%;
            height: 20%;
            text-align: center;
          }
          #DonateHeaderContainer {
            width: 100%;
            justify-content: center;
          }
          #PaymentContainer {
            width: 90%;
            text-align: center;
          }
          #PaymentHeaderContainer {
            height: 30%;
          }

        }

    `]
})
export class DonateBody implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://assets.Payment.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
