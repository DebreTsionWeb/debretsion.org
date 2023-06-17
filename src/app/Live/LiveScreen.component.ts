import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'LiveScreen',
  template: `
    <div id='Live'>
      <div id='LiveContainer'>
        <div id='LiveTitleContainer'>
          <h1 id='LiveTitle'>Live</h1>
          <p id='LiveSubText'>View our latest live stream</p>
        </div>
        <div id='LiveContainer'>
          <div id="player"></div>
        </div>
        <div id='LiveIconContainer'>
          <div id='LiveIconTextContainer'>
            <h1 id='LiveText'>Visit our youtube!</h1>
          </div>
          <div id='LiveIcon'>
            <a href="https://www.youtube.com/@debretsionkidistmariamweki8588/streams" target="blank"><span id="Icon" class="fab fa-youtube"></span></a>
          </div>
      </div>
    </div>
    `,
  styles: [`

  `]
})

export class LiveScreen implements OnInit, AfterViewInit {
  ngOnInit() {
    // Load the YouTube IFrame Player API script dynamically
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

  title = 'Live | Debre Tsion';
}
