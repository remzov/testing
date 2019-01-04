import React, { Component } from 'react';
import Question from '../../components/Question/Question';

export default class QuestionPool extends Component {
  render() {
    return (
      <ul>
        <li>
          <Question/>
        </li>
        <li>
          <Question/>
        </li>
        <li>
          <Question/>
        </li>
      </ul>
    );
  }
}
