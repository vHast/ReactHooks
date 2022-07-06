### - Chapter 4 - Working With Components

We will learn more about using components , how to reuse them and put them together in an application, we will use the existing code from chapter 3

# 4.1 Styles

We can further modify React-bootstrap with our own css styles required by our component.

These styles are scoped only to your component, they won't affect to the outer DOM or other components.

Suppose we want our filled stars to be orange, in Rating.js we add the following in bold after export default Rating

  const styles ={
    starStyle:{
      color: 'gray'
    }
  }

This will create an object with the CSS attribute we want to implement to our React component

And then we just add the link to the div of our interest, mind that this style is scoped inside this component only

  <div style={styles.starStyle}>

# 4.2 Example Application

After creating the template component Product.js (not Products.js) we will use media object in react-bootstrap in https://react-bootstrap.github.io/

We select Layout