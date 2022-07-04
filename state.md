### STATE

# 3.4 Adding Local State to a Component

Now, suppose we want our user to be able to change the rating by clicking on the specified star, how do we make our rating component render in response to a user click?

This is where we add STATE to our Rating component but 

# It is PRIVATE and FULLY CONTROLLED by the Component

State manages data that will change within a component, whenever state changes, the UI is re-rendered to reflect those changes, we often refer to this as the component or local state.

  function Rating(props) {
     const [rating, setRating] = useState(props.rating)
  }

# useState

is a HOOK which we call to add some local state to a component.

React preserves this state between re-renders of the component.

useState returns an array with two values

  1 - The current state value (rating)
  2 - Function that lets you update it (setRating)


# Handling EVENTs with States

We want to assign a rating depending on which star the user has clicked, our component needs to handle the click event.

Handling events with React components is very similar to handling events on DOM elements.