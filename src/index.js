import React from 'react';
import ReactDOM from 'react-dom';
// chips: applyMiddlewareはミドルウェアを適用するための関数
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import './index.css';
import EventsIndex from './components/events_index';
import reportWebVitals from './reportWebVitals';
// chips: redux-thunkはアクションクリエーターで非同期処理を実装するためのミドルウェア
import thunk from 'redux-thunk'

// chips: ここで定義したstoreはアプリケーション内で唯一のもの
//        アプリケーション内のステートは全てこのstoreに集約されることとなる
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EventsIndex />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
