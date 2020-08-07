import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      {/* <Greet> </Greet> */}
      {/* same as above, with a self closing as there's nothing inside it */}
      <Greet />
    </div>
  );
}

export default App;
