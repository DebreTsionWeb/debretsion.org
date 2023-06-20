import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'LiveBody',
  template: `

    <div id='Live' class="fade-in">
      <div id='LiveContainer'>
        <div id='LiveHeaderContainer'>
          <h1 id='LiveHeader'>Live</h1>
        </div>
        <div id='LivePlayerContainer'>
          <p id='LiveSubText'>View our latest live stream</p>
          <div id="player"></div>
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
      border: 1px solid black;
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
    #LiveContainer {
      display: flex;
      position: relative;
      width: 90%;
      height: 100%;
      flex-direction: column;
      border: 1px solid red;
    }
    #LiveHeaderContainer {
      display: flex;
      position: relative;
      width: 100%;
      flex-direction: column;
    }
    #LiveHeader {

    }
    #LivePlayerContainer {
      display: flex;
      position: relative;
      width: 100%;
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

    }
    #LiveIconTextContainer {

    }
    #LiveText {
      font-size: 21px;
      text-align: center;
    }
    #LiveIcon {
      font-size: 21px;
      text-align: center;
    }
    #Icon {

    }

    @media (max-width: 720px) {
      #Live {
        height: 100vh;
      }
      #player{
        height: 20px;
        width: 20px;
      }
    }

  `]
})

export class LiveBody implements OnInit, AfterViewInit {
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // Add an event listener to wait for the YouTube API script to load
    (window as any).onYouTubeIframeAPIReady = () => {
      this.renderPlayer();
    };
  }

  ngAfterViewInit() {
    // Initialize and render the YouTube player once the API is loaded
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
          height: '360',
          width: '640',
          videoId: videoId,
        });
      });
  }

  Title = 'Live | Debre Tsion';
}
