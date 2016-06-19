import React, { Component } from 'react';
// css modules
import styles from './App.scss';

import imgA from '../images/forgive.png';
import imgB from '../images/jump.jpg';
import imgTiny from '../images/tiny.jpg';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Hello world, from React</h1>
        <p className={styles.red}>red</p>
        <p className={styles.green}>green</p>
        <p className={styles.blue}>blue</p>
        <p>absolute remote:</p><img src="https://placeimg.com/200/200/any" alt="" />
        <p>relative local:</p>
        <img src={imgA} alt="" />
        <img src={imgB} alt="" />
        <p>sub 20kb relative local for future base64 encoding</p>
        <img src={imgTiny} alt="" />
        <div className={styles.some}>
          <div className={styles.nested}>
            <div className={styles.shite}>
              <p>ey!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
