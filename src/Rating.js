import React, {useState} from 'react';
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';

function Rating(props) {

  const [rating, setRating] = useState(props.rating); // useState is a hook which we call to add some local state to a component 

  return (
    <div>

      <h1>Rating: {rating}</h1>

      {rating >= 1 ? (<IoIosStar onClick={() => setRating(1)}/>
      ): (
        <IoIosStarOutline onClick={() => setRating(1)}/>
      )}

      {/* In each star, we pass in an arrow function as the event handler with rating value to the onClick event
      
          So this means if an user clicks on the third star, it will assign the rating to 3, and if it clicks on the fourth star it will assign the rating of four */}

      {rating >= 2 ? (<IoIosStar onClick={() => setRating(2)}/>
      ): (
        <IoIosStarOutline onClick={() => setRating(2)}/>
      )}

      {rating >= 3 ? (<IoIosStar onClick={() => setRating(3)}/>
      ): (
        <IoIosStarOutline onClick={() => setRating(3)}/>
      )}

      {rating >= 4 ? (<IoIosStar onClick={() => setRating(4)}/>
      ): (
        <IoIosStarOutline onClick={() => setRating(4)}/>
      )}
      
      {rating >= 5 ? (<IoIosStar onClick={() => setRating(5)}/>
      ): (
        <IoIosStarOutline onClick={() => setRating(5)}/>
      )}

    </div>
  )
}

export default Rating;