import React from 'react';
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';

function Rating(props) {
  return (
    <div>
      <h1>Rating: {props.rating}</h1>
      {props.rating >= 1 ? (<IoIosStar/>
      ): (
        <IoIosStarOutline></IoIosStarOutline>
      )}
      {props.rating >= 2 ? (<IoIosStar/>
      ): (
        <IoIosStarOutline></IoIosStarOutline>
      )}
      {props.rating >= 3 ? (<IoIosStar/>
      ): (
        <IoIosStarOutline></IoIosStarOutline>
      )}
      {props.rating >= 4 ? (<IoIosStar/>
      ): (
        <IoIosStarOutline></IoIosStarOutline>
      )}
      {props.rating >= 5 ? (<IoIosStar/>
      ): (
        <IoIosStarOutline></IoIosStarOutline>
      )}

    </div>
  )
}

export default Rating;