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

