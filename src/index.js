import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Item = [ 
    {id:1, message:'Привет'},
    {id:2, message:'Приве'},
    {id:3, message:'Прив'},
    {id:4, message:'При'},
    {id:5, message:'Пр'},
    {id:6, message:'П'}
]

const ItemMess = [
    {id:1, message:'Пока'},
    {id:2, message:'Пок'},
    {id:3, message:'По'},
    {id:4, message:'П'}
]

ReactDOM.render(<App data={Item} message={ItemMess}/>, document.getElementById('root'));


