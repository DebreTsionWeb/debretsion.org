import { Component, OnInit } from "@angular/core";

@Component({
    selector: "AboutBody",
    template: `
        <div id="AboutBody"  >
            <div id="AboutBodyContainer">
                <div id="AboutBodyHeaderContainer">
                  <h1 id='AboutHeaderText'>About Us</h1>
                </div>
                <div id="AboutBodyTextContainer">
                    <p id='AboutText'>
                      For the first church service at Debre Tsion Kidist Mariam we Gebriel, the holiday of Kidist Mariam is celebrated on her anniversary
                      Saturday, June 21, 2006 (June 28, 2014 in Ethiopian calendar) was hosted
                      at an Ukrainian Orthodox Church in New Hampshire, which was rented for one day only.
                      His Holiness Bishop Abune Fanuel, priests of the local churches, and a large number of congregation attended.
                      Then, on Saturday, June 28/2006 (July 3, 2014 in the Ethiopian Calendar), church service was held every saturday
                      at our rental space located on Old Columbia pike, Silver Spring MD 20904.
                      <br>
                      <br>
                      In our first few years running the church, there was only one permenant priest and one permenant deacon, and thus it took time to gather more congregation members.
                      Kesis Kefelenge, the head priest and owner of Debre Tsion Kidist Mariam we Gebriel, had been coordinating service here for six years, and has 30+ years experience in leadership at multiple churches internationally and within America.
                      Eyosyas Kefelenge, the head deacon and son of Kesis Kefelenge, has been serving for 5+ years and was the first permenant deacon at Debre Tsion Mariam we Gebriel.
                      <br>
                      <br>
                      During Covid-19, the church had to be shut down for a year and a half. The year and a half that the church was closed, by God's will, and
                      By the grace of Kidist Mariam, the tireless efforts of the servants and the fellowship of the faithful, we are here today after purhcasing our fully-owned church building in Brookeville, Maryland.
                      We renewed and prepared the interior according to the order and tradition of our church and prepared it under the guidance of His Holiness the Pope.
                      We are providing a wide range of spiritual services.
                      In all the spiritual journeys of our parish, there were many holy bishops, priests, deacons, and servants who served with us.
                      <br>
                      <br>
                      Our church, which was founded by one priest and one deacon, taught exemplary education
                      and appointed young people with merit and rank for deaconhood, and the priests have grown to three while there have been several new deacons appointed and are contributing full service.
                      <br>
                      <br>
                      Debre Tsion Kidist Mariam we Gebriel, is full of miracles and is planted on a hilltop in the countryside. We have been blessed to offer outdoor and indoor baptism services, weddings, and many more holidays we commence outdoors and indoors.
                      Our church also has ample parking and a multi-purpose hall.
                    </p>
                </div>
            </div>
            <div id="AboutImageContainer">
              <div id="ImageContainer">
                <img id="AboutImage" src="assets/ExampleAboutImg.jpg" alt="picture">
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
            height: 330px;
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
