import './App.css'; // The App component is teh root of our application, it is the view component that controls our entire app or page

import Products from './Products'; // We import the Products component

function App() {
  return (
    <div>
      <h1>
        Learn React Hooks
        <Products /> {/* We have just referred to another component from a component */}
      </h1>
    </div>
  );
}

export default App;
