import React, { useState } from "react";
import "./helpForm.css";

export class HelpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      comment: "",
    };
  }
  onChangeName = (evt) => {
    this.setState({
      name: evt.target.value.replace(/[^a-z\s]/gi, ""),
      email: this.state.email,
      comment: this.state.comment,
    });
  };
  onChangeEmail = (evt) => {
    this.setState({
      name: this.state.name,
      email: evt.target.value,
      comment: this.state.comment,
    });
  };
  onChangeComment = (evt) => {
    this.setState({
      name: this.state.name,
      email: this.state.email,
      comment: evt.target.value,
    });
  };
  render() {
    return (
      <div className="form">
        <div className="close" onClick={() => this.props.setShowForm(false)}>X</div>
        <form>
          <p className="label">Full Name</p>
          <input
            className="form_input"
            placeholder="eg. John Doe"
            value={this.state.name}
            onChange={this.onChangeName}
          />

          <p className="label">Email</p>
          <input
            type="email"
            className="form_input"
            placeholder="youremail@gmail.com"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />

          <p className="label">Your comment</p>
          <textarea
            className="form_comment"
            value={this.state.comment}
            onChange={this.onChangeComment}
          />
        </form>
        <button className="btnForm">Send</button>
        <div className="contact">
          <h2>USA Office</h2>
          <p> &#9998; 198 West 21th Street, Suite 721 New York NY 10016</p>
          <p>&#9993; info@domain.com</p>
          <p> &#9990; +123 456 7890</p>
        </div>
        <div className="contact">
          <h2>Europe Office</h2>
          <p> &#9998;198 West 21th Street, Suite 721 New York NY 10016</p>
          <p> &#9993; info@domain.com</p>
          <p> &#9990; +123 456 7890</p>
        </div>
        <div className="contact">
          <h2>Asia Office</h2>
          <p> &#9998;198 West 21th Street, Suite 721 New York NY 10016</p>
          <p> &#9993; info@domain.com</p>
          <p>&#9990; +123 456 7890</p>
        </div>
      </div>
    );
  }
}
