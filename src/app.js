import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp options={['Devils Den', 'Decond District']}/>, document.getElementById('app'));
// here we are overriding the default buy providing our own props
