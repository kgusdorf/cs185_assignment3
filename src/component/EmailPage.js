import React, { Component } from 'react';

export default class EmailPage extends Component {
  constructor(props) {
    super(props);

    this.startValidation = this.startValidation.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.afterSubmission = this.afterSubmission.bind(this);
  }

  startValidation(e) {
    let email_text = document.getElementById('email');
    let response = document.getElementById('response');
    let text = email_text.value;
    if (this.validateEmail(text)) {
      response.innerHTML = '<h2>Valid email!</h2>';
    } else {
      response.innerHTML = '<h2>Invalid email!</h2>';
    }
    this.afterSubmission(e);
  }

  validateEmail(email) {
    return email.includes('@') && ['.com', '.edu'].includes(email.substr(email.length - 4));
  }

  afterSubmission(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="textpage">
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input type="text" id="email" />
          <button
            id="email_button"
            onClick={(e) => {
              this.startValidation(e);
              return false;
            }}
          >
            Check
          </button>
        </form>
        <div id="response"></div>
      </div>
    );
  }
}
