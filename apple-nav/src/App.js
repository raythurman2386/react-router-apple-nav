import React from 'react';
import { Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar/Navbar'
import Mac from './components/Mac'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/mac" component={Mac} />
    </div>
  );
}

export default App;
