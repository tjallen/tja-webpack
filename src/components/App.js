import React, { Component } from 'react';
// css modules
import styles from './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Hello world, from React</h1>
        <p className={styles.red}>red</p>
        <p className={styles.green}>green</p>
        <p className={styles.blue}>blue</p>
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
