import React, { Component } from 'react';
// css modules
import styles from './App.scss';

import imgA from '../images/forgive.png';
import imgTiny from '../images/tiny.jpg';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Hello world, from React</h1>
        <p className={styles.red}>red</p>
        <p className={styles.blue}>blue</p>
        <p>local imported image:</p>
        <img src={imgA} alt="" />
        <p>sub 20kb image that gets base64 encoded:</p>
        <img src={imgTiny} alt="" />
      </div>
    );
  }
}
