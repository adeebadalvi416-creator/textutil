import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  return(
    <>
   <Navbar title="TEXTUTILS APP"/>
   <div className='container my-3'>
    <Textform heading="enter the text to analyse here"/>

   </div>
   </>
  );
}
export default App;