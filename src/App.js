import React from 'react';
import './App.css';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import Hooks from './Components/Hooks/Hooks';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
		Hello World
        <ClassComponent />
		<Hooks />	
    </div>
  );
}

export default App;
