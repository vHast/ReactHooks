import React from 'react';
import {Button} from 'react-bootstrap';

function JumbotronComponent() {
  return (
    <div className="container bg-light p-5">
        <h1 className="display-4 fw-bold">Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button variant="primary">Learn more</Button></p>
    </div>
  )
}

export default JumbotronComponent;

// 2h 14m