import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const msg = this.refs.message.value;
    console.log(name, email, msg);
  }


  render() {
    return (
      <form className="emailContactForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="name" ref="name"/>
        <input type="text" placeholder="email" ref="email"/>
        <textarea placeholder="Send me a message!" ref="message"/>
        <button>Submit</button>
      </form>
    );
  }
}
