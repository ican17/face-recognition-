import React from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecog from './components/FaceRecog/FaceRecog';



function App() {

  return (
    <div className="App">
      <Navigation />
      <ImageLinkForm/>
      <FaceRecog/>
    </div>
  );
}


export default App;
