import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import './index.css';
import EventsIndex from './components/events_index';
// import EventsNew from './components/events_new';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'
// Linkを使用しているコンポーネントはラップする必要がある

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/events/new' components={EventsNew} /> */}
          <Route exact path='/' component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
