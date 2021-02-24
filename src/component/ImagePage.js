import React, { Component } from 'react';
import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';
import pic3 from '../assets/images/pic3.jpg';
import pic4 from '../assets/images/pic4.jpg';
import pic5 from '../assets/images/pic5.jpg';
import pic6 from '../assets/images/pic6.jpg';

export default class ImagePage extends Component {
  constructor(props) {
    super(props);
    const imgOverlay = document.createElement('div');
    imgOverlay.id = 'imgOverlay';
    document.body.appendChild(imgOverlay);

    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.addEventListener('click', (e) => {
        imgOverlay.className = 'active';
        const img = document.createElement('img');
        img.src = image.src;
        while (imgOverlay.firstChild) {
          imgOverlay.removeChild(imgOverlay.firstChild);
        }
        imgOverlay.appendChild(img);
      });
    });

    imgOverlay.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        imgOverlay.classList.remove('active');
      }
    });
  }

  render() {
    return (
      <div className="images-grid">
        <img src={pic1} alt="pic1" width="100%"></img>
        <img src={pic2} alt="pic2" width="100%"></img>
        <img src={pic3} alt="pic3" width="100%"></img>
        <img src={pic4} alt="pic4" width="100%"></img>
        <img src={pic5} alt="pic5" width="100%"></img>
        <img src={pic6} alt="pic6" width="100%"></img>
      </div>
    );
  }
}
