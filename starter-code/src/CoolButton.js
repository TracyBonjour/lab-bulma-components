import React, { Component } from "react";
import 'bulma/css/bulma.css';

class CoolButton extends Component {
  render() {
    return (
        <div>
        <button className="button is-rounded my-class is-danger is-small">{this.props.name1}</button>
        <button className="button is-small is-success">{this.props.name2}</button>
        </div>
    );
  }
}

export default CoolButton;