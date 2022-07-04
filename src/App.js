import React, { Component } from 'react';
import './App.css'; // The App component is the root of our application, it is the view component that controls our entire app or page

import Products from './Products'; // We import the Products component

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap'

import Rating from './Rating';

function App() {
  
  const isValid = true;

  return (
    <div>
      <Rating rating='1'/> {/*The rating is a prop, it can be acessed through props.rating which it has been done in the functional Rating.js component */}
      <Rating rating='5'/>
    </div>
  )
}

export default App;
