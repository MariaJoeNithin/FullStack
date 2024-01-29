import React, { useEffect, useReducer } from "react";

export default function CartPage() {
  const initialState = { cart: [], totalCost: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItemIndex = state.cart.findIndex(
          (item) => item.productId === action.item.productId
        );

        if (existingItemIndex !== -1) {
          // If item already exists in cart, update quantity
          const updatedCart = [...state.cart];
          updatedCart[existingItemIndex].quantity += 1;

          return {
            ...state,
            cart: updatedCart,
            totalCost: state.totalCost + action.item.price,
          };
        } else {
          // If item doesn't exist in cart, add it with quantity 1
          return {
            ...state,
            cart: [...state.cart, { ...action.item, quantity: 1 }],
            totalCost: state.totalCost + action.item.price,
          };
        }

      case "REMOVE_FROM_CART":
        const foundItem = state.cart.find(
          (item) => item.productId === action.id
        );

        if (foundItem.quantity > 1) {
          // If item quantity is more than 1, decrease quantity
          const updatedCart = state.cart.map((item) =>
            item.productId === action.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );

          return {
            ...state,
            cart: updatedCart,
            totalCost: state.totalCost - foundItem.price,
          };
        } else {
          // If item quantity is 1, remove the item from cart
          return {
            ...state,
            cart: state.cart.filter((item) => item.productId !== action.id),
            totalCost: state.totalCost - foundItem.price,
          };
        }

      case "REMOVE_ALL_FROM_CART":
        return {
          ...state,
          cart: [],
          totalCost: 0,
        };

      default:
        throw new Error("Invalid Action");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const removeAllFromCart = () => {
    dispatch({ type: "REMOVE_ALL_FROM_CART" });
  };

  const getTotalQuantity = () => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    const fetchData = () =>
      fetch("https://dummyjson.com/products/")
        .then((res) => res.json())
        .then((json) =>
          json.products.slice(0, 4).forEach((product) => {
            addToCart({
              productId: product.id,
              productImage: product.images[0],
              productName: product.name,
              price: product.price,
            });
          })
        );

    fetchData();
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark"
        style={{ height: "80px" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart ({getTotalQuantity()})
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid p-5">
        <h2>Shopping Cart</h2>
        {state.cart.length > 0 ? (
          <>
            {state.cart.map((item) => (
              <div key={item.productId}>
                <p>{item.productName}</p>
                <img
                  src={item.productImage}
                  alt=""
                  height={"100px"}
                  width={"100px"}
                />
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => addToCart(item)}>
                  Increase Quantity
                </button>
                <button onClick={() => removeFromCart(item.productId)}>
                  Decrease Quantity
                </button>
              </div>
            ))}
            <div>
              <p>Total Cost: ${state.totalCost}</p>
              <button onClick={removeAllFromCart}>Remove All</button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
}
