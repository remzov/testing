import React, { Component } from 'react';
import BtnNext from '../BtnNext/BtnNext';
import './Question.scss';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {picked: false};
    this.showNextBtn = this.showNextBtn.bind(this);
  }
  render() {
    return (
      <div className="question">
        <div className="question__text">
          {this.props.questionText}
        </div>
        <ul className="question__variants">
          {this.props.questionVariants.map((variant, index) =>
            <li className="question__variant" key={index}>
              <label>
                <input onInput={this.showNextBtn} className="question__input" type="radio" name={`question-${this.props.questionId}`} value={variant}/>
                {variant}
              </label>
            </li>
          )}
        </ul>
        {(this.picked) ? <BtnNext clickHandler={this.props.nextQuestion}/> : false}
      </div>
    );
  }
  showNextBtn() {
    this.setState((state) => ({
      picked: true
    }));
  }
}
