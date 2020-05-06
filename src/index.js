import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

function reducer(state = {}, action) {
  const { name, img, inventory, issue, id } = action;
  switch (action.type) {
    case 'ADD_MERCH':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        img: img,
        inventory: inventory,
        issue: issue,
        id: id
      }
    });
    case 'DELETE_MERCH':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
  return state;
  }
}


const store = createStore(reducer);

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
