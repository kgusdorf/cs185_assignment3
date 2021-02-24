import React, { Component } from 'react';
import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';
import vid4 from '../assets/videos/vid4.mp4';

export default class VideoPage extends Component {
  render() {
    return (
      <div className="images-grid">
        <video width="420" height="315" src={vid1} type="video/mp4" controls></video>
        <video width="420" height="315" src={vid2} type="video/mp4" controls></video>
        <video width="420" height="315" src={vid3} type="video/mp4" controls></video>
        <video width="420" height="315" src={vid4} type="video/mp4" controls></video>
      </div>
    );
  }
}
