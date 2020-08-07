import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet> </Greet> */}
      {/* same as above, with a self closing as there's nothing inside it */}
      <Greet name="Bruce" heroName="Batman"> 
        <p> This is children props! </p>
      </Greet>
      <Greet name="Clark" heroName="Superman"> 
        <button> Click! </button>
      </Greet>
      <Greet name="Diana" heroName="WonderWoman"/>
      <Welcome name="Bruce" heroName="Superman"/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
