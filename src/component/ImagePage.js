import React, { Component } from 'react';
import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';
import pic3 from '../assets/images/pic3.jpg';
import pic4 from '../assets/images/pic4.jpg';
import pic5 from '../assets/images/pic5.jpg';
import pic6 from '../assets/images/pic6.jpg';

export default class ImagePage extends Component {
  handleImgClick(e) {
    let imgOverlay = document.getElementById('imgOverlay');
    imgOverlay.className = 'active';
    const img = document.createElement('img');
    img.src = e.target.src;
    while (imgOverlay.firstChild) {
      imgOverlay.removeChild(imgOverlay.firstChild);
    }
    imgOverlay.appendChild(img);
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
          <img src={pic1} alt="pic1" width="100%" onClick={this.handleImgClick}></img>
          <img src={pic2} alt="pic2" width="100%" onClick={this.handleImgClick}></img>
          <img src={pic3} alt="pic3" width="100%" onClick={this.handleImgClick}></img>
          <img src={pic4} alt="pic4" width="100%" onClick={this.handleImgClick}></img>
          <img src={pic5} alt="pic5" width="100%" onClick={this.handleImgClick}></img>
          <img src={pic6} alt="pic6" width="100%" onClick={this.handleImgClick}></img>
        </div>
      </div>
    );
  }
}
