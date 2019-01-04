import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setReady } from '../../actions/intro';
import Intro from '../../components/Intro/Intro';
import QuestionsList from '../../containers/QuestionsList/QuestionsList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__container">
          {(!this.props.ready) ? <Intro setReady={this.props.setReady}/> : false}
          {(this.props.ready) ? <QuestionsList/> : false}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    ready: state.ready,
  }),
  dispatch => ({
    setReady: () => dispatch(setReady()),
  })
)(App);
