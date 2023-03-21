import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Wholefind from './Wholefind';
import './Firebase/firebase';


class App extends Component {
  render (){
    return (
        <BrowserRouter>
          <div className="App">
            <Wholefind />
          </div>
        </BrowserRouter>
    );
  }
}




export default App;
