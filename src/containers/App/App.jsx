import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setReady } from '../../actions/index';
import Intro from '../../components/Intro/Intro';
import Finish from '../../components/Finish/Finish';
import QuestionsPool from '../QuestionsPool/QuestionsPool';
import questionsList from '../../questions.json';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__container">
          {(!this.props.userReady) ? <Intro setReady={this.props.setReady}/> : false }
          {(this.props.userReady && !this.props.userFinished) ? <QuestionsPool questionsList={questionsList}/> : false }
          {(this.props.userFinished) ? <Finish points={this.props.points}/> : false}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userReady: state.userReady,
    userFinished: state.userFinished,
    points: state.points
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setReady: () => dispatch(setReady())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
