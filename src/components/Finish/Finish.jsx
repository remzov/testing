import React, {Component} from 'react';
import './Finish.scss';

export default class Finish extends Component {
  render() {
    return (
      <div className="finish">
        Поздравляем, вы набрали <span className="finish__points">{this.props.points}</span> баллов!
      </div>
    )
  }
}
