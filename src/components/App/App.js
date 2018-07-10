import React from 'react';
import s from './App.scss';


class App extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.header}>
          <h2>{'app.title'}</h2>
        </div>
        <p className={s.intro}>
          {'app.intro'}
        </p>
      </div>
    );
  }
}

export default App;
