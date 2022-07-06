## React Hook Notes

With React Hooks, we can define application logic to interact with te view through state properties and adding other functions.

## Chapter 2: Creating and Using Components

# Embedding Expressions in JSX

You can embed Javascript expressions in JSX by wrapping it in curly braces, we can define functions, properties and render them in the output.

  function formatName(user){
    return user.firstName + '' user.lastNamel
  }

const user = {
  firstName: 'Greg',
  lastName: 'Thompson'
}

# User object being declared

function App() {
  return (
    <div>
      <h1>
        Hello {formatName(user)}, welcome to Learn React Hooks {/* Here we have called the previous function and returned the result as a JSX*/}
        <Products /> {/* We have just referred to another component from a component */}
      </h1>
    </div>
  );
}

# Displaying a List


# 3.1 CSS Class Binding

React-Bootstrap is a library of reusable front-end components that contain JSX based templates to build user interface components.

Installing React-Bootstrap

npm install react-bootstrap bootstrap

  import { Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return(
      <div>
        <Products />
        <Button>Default</Button>
      </div>
    )
  }
}

Note that now we have a class component, we return the Product list we made before and the Button, if we want to modify the button in any way we could just put a variant

<Button variant ="danger">Default</Button>

And if I want to disable the button by applying the disabled class, I can do the following

<Button variant="primary" disabled>Default</Button>

More information about button components are availabe at the React Bootstrap site under 'Components'.

# Disabling Button on Condition

We want to disable the button based on some condition, we can do the below: 

function App() {
  
  const isValid = true;

  return (
    <div>
      <Products />
      <Button variant="danger" disabled={!isValid}>Default</Button>
    </div>
  )
}

NOTE: Function based component

  # 3.2 Props

The props object contains JSX attributes, for example, suppose we want to display a list of products with its rating

We want to display a list of products with its rating, we will need to assign the rating value to our rating component beforehand

<Rating rating ="4">

'props' will contain the value of 4 assigned to the rating attribute, to acess 'props' in our Rating component, we use props.rating.

We must never modify them, our functions must always be pire, props are read-only, all React components MUST act like pure functions concerning their props

# 3.3 Improvising the Look

We will use React Icons library from https://react-icons.github.io/react-icons

Install React icons by running:

npm instal react-icons --save

To include them in our React project, add the below codes in bold into Rating component

import {IoIosStar, IoIosStarOutline } from 'react-icons/io'

Then we apply the JSX back into the Rating.js component

function Rating(props) {
  return (
    <div>
      <h1>Rating: {props.rating}</h1>
      {props.rating >= 1 ? (<IoIosStar/>
      ): (
        <IoIosStarOutline></IoIosStarOutline>
      )}
    </div>
  )
}

## What we are saying here is that, after we state the <h1>, we will check if props.rating is 1, if it is, we will add <IoIosStar/> into the component, if not, it will add an outline, this has been made using ternary operators.

The final result we're looking for is this

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

Which consists of 5 if statements in order to create the stars, every time it checks the number it will add either a star or a star outline.





