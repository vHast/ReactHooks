import React from 'react';
import Rating from './Rating';
import {Card} from 'react-bootstrap'

const Product = (props) => {
  return (


    <div>

      <Card>
        <img 
        width= {64}
        height= {64}
        className="mr-3"
        src={props.data.imageUrl} 
        alt="Product"
        />

          <Card.Body>
            <h5> {props.data.productName} </h5>
            {props.data.releasedDate}
              <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews}
            />

          <p>{props.data.description}</p>
          </Card.Body>
      </Card>
    </div>
  );
}

export default Product;