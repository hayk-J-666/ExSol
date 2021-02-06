import React from 'react';
import ReactDOM from 'react-dom';
import {rerender} from "./redux/state"
import App from './App';
import './index.css';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} rerender = {rerender}/>, document.getElementById('root'));
}