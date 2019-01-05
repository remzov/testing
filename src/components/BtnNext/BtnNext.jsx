import React, { Component } from 'react';
import './BtnNext.scss';

export default class BtnNext extends Component {
  render() {
    return (
      <button className="btn-next" type="button" onClick={this.props.clickHandler}>Далее</button>
    );
  }
}
