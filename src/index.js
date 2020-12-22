import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './State'
import {addPost} from './State'

ReactDOM.render(<App state={state} addInfo={addPost}/>, document.getElementById('root'));


