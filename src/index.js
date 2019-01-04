import React  from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import reducer from './reducers/index';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
   document.getElementById('root')
);

 store.subscribe( () =>  console.log(store.getState()) );
