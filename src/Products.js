// Creation of our first component

import React from 'react'; // Imports the 'react' library

function Products() {

  const products = ["Learning React", "Pro React", "Beginning React"];

  const listProducts = products.map((product) =>
    <li key ={product.toString()}>{product}</li>
  );
  return ( // We specify the JSX that will be inserted into the DOM as HTML when the component's view is rendered
    <div>
      <ul>{listProducts}</ul>
    </div>
  )
}

export default Products; // Makes this component available for other files in our application to import it