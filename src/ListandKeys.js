import React from 'react';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
  <li key={number.toString}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

// Keys help React identify which items have changed, are added, or are removed, key should be given to the elements inside the array to give the elements a stable identity

export default NumberList;