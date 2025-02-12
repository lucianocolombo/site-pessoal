import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Resume />
      <Portfolio />
    </div>
  );
};

export default App;