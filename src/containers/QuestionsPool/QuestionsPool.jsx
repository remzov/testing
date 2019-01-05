import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../../components/Question/Question';
import {nextQuestion} from '../../actions/index';
import './QuestionPool.scss';

class QuestionPool extends Component {
  render() {
    return (
      <div className="question-pool">
        <div className="question-pool__counter">
          {this.props.active + 1}/{this.props.questionsList.length}
        </div>
        <Question
          questionId={this.props.questionsList[this.props.active].id}
          questionText={this.props.questionsList[this.props.active].text}
          questionVariants={this.props.questionsList[this.props.active].variants}
          questionAnswer={this.props.questionsList[this.props.active].answer}
          nextQuestion={this.props.nextQuestion}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    active: state.active,
    userFinished: state.userFinished,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    nextQuestion: () => dispatch(nextQuestion())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPool);
