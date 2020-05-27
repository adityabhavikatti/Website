import React from 'react';
import './Assets/scss/App.scss';
import Header from './components/header'
import Intro from './components/intro'


function App() {
  return (
    <div>
      <Header></Header>
      <div className="content"> 
        <Intro></Intro>
      </div>
    </div>
  );
}

export default App;
