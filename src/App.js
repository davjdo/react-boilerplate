import React from 'react';
import logo from './logo.svg';
import styles from './App.css';

const App = props => (
  <div className={styles.App}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>Welcome to React</h1>
    </header>
    <p className={styles.intro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
