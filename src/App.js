import React from 'react';
import './App.css'; // The App component is the root of our application, it is the view component that controls our entire app or page
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';

function App() {

  return (
    <div>
      <Products/>
    </div>
  )
}

export default App;
