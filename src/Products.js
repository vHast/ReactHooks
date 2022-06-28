// Creation of our first component

import React from 'react'; // Imports the 'react' library

function Products() {
  return ( // We specify the JSX that will be inserted into the DOM as HTML when the component's view is rendered
    <div>
      <h1>
        Products
      </h1>
    </div>
  )
}

export default Products; // Makes this component available for other files in our application to import it