import React, { Component } from 'react';
import BtnNext from '../BtnNext/BtnNext';
import './Intro.scss';

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro__title">
          Тест на эрудицию
        </div>
        <div className="intro__desc">
          Аджива, конечно, философски творит закон внешнего мира. Искусство осмысленно транспонирует смысл жизни. Аксиома силлогизма, как следует из вышесказанного, нетривиальна.
        </div>
        <BtnNext clickHandler={this.props.setReady}/>
      </div>
    );
  }
}
