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
                <a target=blank href=''><img id="Paypal" src='assets/paypal.png'/></a>
                <a target=blank href=''><img id="Paypal" src='assets/paypal.png'/></a>
              </div>
            </div>
          </div>
          <div id="DonateBodyContainer">
            <div id="DonateHeaderContainer">
              <h1 id="DonateHeader">Mission Statement</h1>
            </div>
            <div id="InfoContainer">
              <p id="Info">Paragraph. This is the about paragraph for the church. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumhis is the about paragraph for the church. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumhis is the about paragraph for the church. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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
            width: 35%;
            height: 600px;
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
          overflow-y: scroll;
        }
        #InfoContainer::-webkit-scrollbar {
          width: 0.2em;
        }
        #InfoContainer::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, .2);
          border-radius: 90% / 3%;
        }
        #Info{
          margin-top: 0;
          margin-right: 1.5%;
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
          width: 105px;
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
          #DonateHeader{
            text-align: center;
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
