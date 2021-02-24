import React from 'react';

export default function ScrollTopButton() {
  const scrollFunction = () => {
    let mybutton = document.getElementById('topButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <button onClick={() => topFunction()} id="topButton" title="Go to top">
        Top
      </button>
    </div>
  );
}
