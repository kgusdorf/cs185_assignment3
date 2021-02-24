import React, { Component } from 'react';
import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';
import vid4 from '../assets/videos/vid4.mp4';

export default class VideoPage extends Component {
  handleVidClick(e) {
    e.preventDefault();
    let vidOverlay = document.getElementById('imgOverlay');
    vidOverlay.className = 'active';
    
    const vid = document.createElement('video');
    vid.width = e.target.width;
    vid.height = e.target.height;
    vid.src = e.target.src;
    vid.controls = true;

    while (vidOverlay.firstChild) {
      vidOverlay.removeChild(vidOverlay.firstChild);
    }
    vidOverlay.appendChild(vid);
  }

  handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      e.target.classList.remove('active');
    }
  }

  render() {
    return (
      <div>
        <div id="imgOverlay" onClick={this.handleOverlayClick}></div>
        <div className="images-grid">
          <video
            width="420"
            height="315"
            src={vid1}
            type="video/mp4"
            controls
            onClick={this.handleVidClick}
          ></video>
          <video
            width="420"
            height="315"
            src={vid2}
            type="video/mp4"
            controls
            onClick={this.handleVidClick}
          ></video>
          <video
            width="420"
            height="315"
            src={vid3}
            type="video/mp4"
            controls
            onClick={this.handleVidClick}
          ></video>
          <video
            width="420"
            height="315"
            src={vid4}
            type="video/mp4"
            controls
            onClick={this.handleVidClick}
          ></video>
        </div>
      </div>
    );
  }
}
