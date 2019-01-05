import React, {Component} from 'react';
import './Finish.scss';

export default class Finish extends Component {
  render() {
    return (
      <div className="finish">
        Поздравляем, вы набрали <span className="finish__points">5</span> баллов!
      </div>
    )
  }
}
