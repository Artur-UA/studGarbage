import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/Redux/store' 
//import {addPost, newText,profileText, restartingAPP} from './State'



const renderPage = (state) => {
ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} /* addInfo={store.addPost.bind(store)} text={store.newText.bind(store)} profileText1={store.profileText.bind(store)} *//>, document.getElementById('root'));
}

renderPage(store.getState());

store.restartingAPP(renderPage);