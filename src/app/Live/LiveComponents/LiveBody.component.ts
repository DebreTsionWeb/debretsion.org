import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'LiveBody',
  template: `

    <div id='Live'>
      <div id='LiveContainer'>
        <div id='LiveHeaderContainer'>
          <p id='LiveHeader'>Live</p>
        </div>
        <div id='LivePlayerContainer'>
          <p id='LiveSubText'>View our latest live stream</p>
          <div id="playerContainer">
            <div id="player"></div>
          </div>
        </div>
        <div id='LiveIconContainer'>
          <div id='LiveIconTextContainer'>
            <p id='LiveText'>Visit our youtube!</p>
          </div>
          <div id='LiveIcon'>
            <a href="https://www.youtube.com/@debretsionkidistmariamweki8588/streams" target="blank"><span id="Icon" class="fab fa-youtube"></span></a>
          </div>
      </div>
    </div>

    `,
  styles: [`
    #Live {
      display: flex;
      position: relative;
      width: 100%;
      height: 90vh;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      animation: fade-in 2s ease-in-out;
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
            right: 50px;
          }
          100% {
            opacity: 1;
            right: 0;
          }
    }
    #LiveContainer {
      display: flex;
      position: relative;
      width: 90%;
      height: 100%;
      flex-direction: column;
    }
    #LiveHeaderContainer {
      display: flex;
      position: relative;
      width: 100%;
      height: 15%;
      justify-content: flex-end;
      flex-direction: column;
      animation: slide-in 3s ease-in-out;
    }
    #LiveHeader {
      font-size: 40px;
      font-family: 'InterBold';
    }
    #LivePlayerContainer {
      display: flex;
      position: relative;
      width: 100%;
      height: 70%;
      margin-top: -3%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    #player{
      display: flex;
      position: relative;
    }
    #LiveSubText {
      font-size: 21px;
      text-align: center;
    }
    #LiveIconContainer {
      display: flex;
      position: relative;
      width: 100%;
      height: 15%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 3%;
    }
    #LiveIconTextContainer {

    }
    #LiveText {
      font-size: 21px;
      text-align: center;
    }
    #LiveIcon {
      font-size: 28px;
      text-align: center;
    }
    #Icon {
      color: red;
    }
    #playerContainer {
      display: flex;
      position: relative;
      width: 60%;
      height: 90%;
    }

    @media (max-width: 720px) {
      #Live {
        height: 90vh;
      }
      #playerContainer {
        width: 100%;
        height: 40%;
      }
    }

  `]
})

export class LiveBody implements OnInit, AfterViewInit {
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

   (window as any).onYouTubeIframeAPIReady = () => {
    this.renderPlayer();
    };
  }

  ngAfterViewInit() {
    if ((window as any).YT && (window as any).YT.Player) {
      this.renderPlayer();
    }
  }

  renderPlayer() {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA3yT_4rYS-Yn7C8XucfB3jvn1tcG1dZZk&channelId=UC57jVK7wVCQGPwvimwO-iXg&part=snippet&order=date&type=video&maxResults=1`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const videoId = data.items[0].id.videoId;

        const player = new (window as any).YT.Player('player', {
          height: '100%',
          width: '100%',
          videoId: videoId,
        });
      });
  }
}
