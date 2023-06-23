import { Component, OnInit } from "@angular/core";

@Component({
    selector: "AboutBody",
    template: `
        <div id="AboutBody"  >
            <div id="AboutBodyContainer">
                <div id="AboutBodyHeaderContainer">
                    <h1 id='AboutHeaderText'>About</h1>
                <div id="AboutBodyTextContainer">
                    <p id='AboutText'>This is the about paragraph for the church. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumhis is the about paragraph for the church. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumhis is the about paragraph for the church. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                </div>
            </div>
            <div id="AboutImageContainer">
              <div id="ImageContainer">
                <img src="assets/ExampleAboutImg.jpg" alt="picture" id="AboutImage">
              </div>
            </div>
        </div>

    `,
    styles: [`
        #AboutBody {
          display: flex;
          position: relative;
          width: 100%;
          height: 90vh;
          flex-direction: row;
          justify-content: center;
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
        @keyframes slide-in {
          0% {
            opacity: 0;
            left: 20px;
          }
          100% {
            opacity: 1;
            left: 0px;
          }
        }
        #AboutBodyContainer {
            display: flex;
            position: relative;
            width: 60%;
            height: 90%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #AboutBodyHeaderContainer {
            display: flex;
            position: relative;
            width: 92%;
            height: 10%;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
        #AboutHeaderText {
            display: flex;
            position: relative;
        }
        #AboutBodyTextContainer {
            display: flex;
            position: relative;
            width: 90%;
            height: 300px;
            justify-content: center;
        }
        #AboutText {
          display: flex;
          position: relative;
          overflow-y: scroll;
        }
        #AboutText::-webkit-scrollbar {
          width: 0.2em;
        }
        #AboutText::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, .2);
            border-radius: 90% / 3%;
        }
        #AboutImageContainer {
            display: flex;
            position: relative;
            width: 35%;
            height: 90%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            animation: slide-in 3s ease-in-out;
        }
        #ImageContainer {
            display: flex;
            position: relative;
            width: 99%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #AboutImage {
            width: 100%;
        }
        @media (max-width: 700px) {
            #AboutBody{
                flex-direction: column;
            }
            #AboutBodyContainer, #AboutBodyHeaderContainer{
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            #AboutBodyTextContainer, #AboutHeaderText{
                text-align: center;
            }
            #AboutText {
              height: 150px;
            }
            #AboutImageContainer {
                justify-content: center;
                align-items: center;
                width: 100%;
            }
            #ImageContainer{
                width: 70%;
            }
          }
    `]
})
export class AboutBody implements OnInit{
    constructor() {}
    ngOnInit() {}
}
