import './App.css'; // The App component is teh root of our application, it is the view component that controls our entire app or page

import Products from './Products'; // We import the Products component

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

// You can embed Javascript expressions in JSX by wrapping it in curly braces, here we have a function formatName() which takes in a user object.

const user = {
  firstName: 'Greg',
  lastName: 'Thompson',
  imageUrl: 'https://picsum.photos/200/300'
}

// User object being declared

function App() {

  
  return (
    <div>
      <h1>
        Hello {formatName(user)}, welcome to Learn React Hooks {/* Here we have called the previous function and returned the result as a JSX*/}
        <Products /> {/* We have just referred to another component from a component */}
        <br />
        <img src={user.imageUrl} alt="Profile of the user" />
      </h1>
    </div>
  );
}

export default App;
