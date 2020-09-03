import React from 'react';
import './App.css';
import Header from './components/app.header';
import MainHeader from './components/app.mainHeader';
import MainContents from './components/app.mainContents';

function App() {
  return (
    <div className="App">
      <Header />
      <MainHeader />
      <MainContents />
    </div>
  );
}

export default App;
