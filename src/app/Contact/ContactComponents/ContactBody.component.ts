import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
    selector: "ContactBody",
    template: `
        <div id="ContactBody" class="fade-in">
          <div id="ContactBodyContainer">
            <div id="ContactHeaderContainer">
              <h1 id="ContactHeader">Contact Us</h1>
            </div>
            <div id="InfoContainer">
              <p id="Address">22222 Gerogia Ave,<br>Brookeville, MD 20833</p>
              <p id="PhoneNumber">Phone: 301-570-3300</p>
              <a id='Email' href="https://mail.google.com/mail?view=cm&fs=1&to=kwgzme@yahoo.com&su=Draft" target="blank">kwgzme@yahoo.com</a>
            </div>
          </div>
          <div id="CalendlyContainer">
            <div id="CalendlyHeaderContainer">
              <h1 id="CalendlyHeader">Schedule a Meeting</h1>
            </div>
            <div id="CalendarContainer">
              <div id="Calendar"><div class="calendly-inline-widget" data-url="https://calendly.com/coolfinn20?hide_gdpr_banner=1"></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              </div>
            </div>
          </div>
        </div>

    `,
    styles: [`
        #ContactBody {
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
        #ContactBodyContainer {
            display: flex;
            width: 40%;
            height: 500px;
            flex-direction: column;
            align-items: center;
        }
        #ContactHeaderContainer {
            display: flex;
            width: 90%;
        }
        #ContactHeader {
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
        #CalendlyContainer {
          display: flex;
          width: 50%;
          height: 600px;
          flex-direction: column;
        }
        #CalendlyHeaderContainer {
            display: flex;
            width: 100%;
            height: 20%;
            justify-content: center;
        }
        #CalendlyHeader {
          font-size: 40px;
        }
        #CalendarContainer {
          display: flex;
          width: 100%;
          height: 100%;
        }
        #Calendar {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          border: 1px solid grey;
          border-radius: 5px;
        }
        #Calendar .calendly-inline-widget {
          display: flex;
          width: 99%;
          height: 100%;
        }
        @media (max-width: 700px) {
          #ContactBody {
            flex-direction: column;
            height: 150vh;
          }
          #ContactBodyContainer {
            width: 90%;
            height: 20%;
            text-align: center;
          }
          #ContactHeaderContainer {
            width: 100%;
            justify-content: center;
          }
          #CalendlyContainer {
            width: 90%;
            text-align: center;
          }
          #CalendlyHeaderContainer {
            height: 30%;
          }

        }

    `]
})
export class ContactBody implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
