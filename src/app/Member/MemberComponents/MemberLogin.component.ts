import { Component, OnInit } from "@angular/core";

@Component({
    selector: "MemberLogin",
    template: `
        <div id="MemberLogin" class="fade-in">
            <div id="MemberLoginContainer">
                <div id="MemberLoginHeaderContainer">
                  <h1 id="MemberLoginHeader">Member Login</h1>
                </div>
            </div>
        </div>

    `,
    styles: [`
        #MemberLogin {
          display: flex;
          position: relative;
          width: 100%;
          height: 90vh;
          flex-direction: row;
          justify-content: center;
          animation: fade-in 2.5s ease-in-out;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        #MemberLoginContainer {
            display: flex;
            position: relative;
            width: 60%;
            height: 90%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #MemberLoginHeaderContainer {
            display: flex;
            position: relative;
            width: 92%;
            height: 10%;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

        }

        @media (max-width: 700px) {
            #MemberLogin{
                flex-direction: column;
            }
            #MemberLoginContainer, #MemberLoginHeaderContainer{
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            #MemberLoginTextContainer {
                text-align: center;
            }
          }
    `]
})
export class MemberLogin implements OnInit{
    constructor() {}
    ngOnInit() {}
}
