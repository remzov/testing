import React, { Component } from 'react';

export default class Question extends Component {
  render() {
    return (
      <div className="question">
        <div className="question__counter">
          1/7
        </div>
        <div className="question__text">
          Сколько будет 2 x 2?
        </div>
        <ul>
          <li>
            <label>
              <input type="radio" value="1"/>
              Один
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="1"/>
              Два
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="1"/>
              Три
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="1"/>
              Четыре
            </label>
          </li>
        </ul>
      </div>
    );
  }
}
