import React from 'react';
import s from './App.scss';

class App extends React.Component {
  render() {
    let x = 2;
    for (let i = 0; i < 1e9; i++) {
      x *= 2;
    }
    return (
      <div className={s.root}>
        <div className={s.header}>
          <h2>{'app.title'}</h2>
        </div>
        <p className={s.intro}>{'app.intro'}</p>
        <p>{'***' && x && '*'}</p>
      </div>
    );
  }
}

export default App;
