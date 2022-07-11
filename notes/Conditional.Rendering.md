### Chapter 5: Conditional Rendering

## 5.1 Inline IF with && Operator

We have earler displayed our list of products, but if thre are no produts to display, we want to display a message like "No products to display" on the page.

To do so, in Product.js we add:

  return(
    <div>
    {listProducts.length > 0 &&
      <ul>{listProducts}</ul> // Displayed code
    }
    {listProducts.length == 0 &&
      <ul>No Products to display</ul> // Displayed code
    }
    </div>
  );

We should see the products displayed as sames as before, but if we comment out our hard-coded data in Product.js and return an empty array instead, we should get the following message.

  No Products to display.

We can interpret the code like this

  Ig listProducts.length > 0 is true, then the element right after && will appear in the output, if it is false, React will ignore and skipt it.


# Inline If-Else with Conditional Operator

The code below can also be implemented with if/else by using the Javascript conditional operator

# condition ? true : false

  {listProducts.length > 0 ? (
    <ul>{listProducts}</ul>
      ) : (
    <ul>No Products to display</ul>
      )}

The code above is saying "If listProducts lenth is > -, then show <ul>{listProducts}</ul>, else, show what follows : which is <ul>No Products to display</ul>

# 4.2 props.children


