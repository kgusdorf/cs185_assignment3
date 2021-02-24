import React, { Component } from 'react';

export default class TextPage extends Component {
  render() {
    return (
      <div className="textpage">
        <form>
          <label htmlFor="fname">First name: </label>
          <br />
          <input type="text" id="fname" defaultValue="Kyle" />
          <br />
          <br />
          <label htmlFor="lname">Last name: </label>
          <br />
          <input type="text" id="lname" defaultValue="Gusdorf" />
          <br />
          <br />
          Favorite Music Artist:
          <br />
          <br />
          <input type="radio" id="music1" defaultValue="Gusdorf" name="music" />
          <label htmlFor="music1">Porter Robinson</label>
          <br />
          <input type="radio" id="music2" defaultValue="Gusdorf" name="music" />
          <label htmlFor="music2">Madeon</label>
          <br />
          <input type="radio" id="music3" defaultValue="Gusdorf" name="music" />
          <label htmlFor="music3">ODESZA</label>
          <br />
          <br />
          <input type="submit" defaultValue="Done"></input>
        </form>
      </div>
    );
  }
}
