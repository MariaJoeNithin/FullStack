import { useReducer, useEffect } from "react";
import "./cart.css";

const NewCart = () => {
  const initialState = { cart: [], totalCost: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "addToCart": {
        const existingItemIndex = state.cart.findIndex(
          (item) => item.productId === action.item.productId
        );

        if (existingItemIndex !== -1) {
          const updatedCart = [...state.cart];
          updatedCart[existingItemIndex].quantity += 1;

          return {
            ...state,
            cart: updatedCart,
            totalCost: state.totalCost + action.item.price,
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.item, quantity: 1 }],
            totalCost: state.totalCost + action.item.price,
          };
        }
      }
      case "removeCart": {
        const currentItem = state.cart.find(
          (item) => item.productId === action.id
        );
        if (currentItem.quantity > 1) {
          const updatedCart = state.cart.map((item) =>
            item.productId === action.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );

          return {
            ...state,
            cart: updatedCart,
            totalCost: state.totalCost - currentItem.price,
          };
        } else {
          return {
            ...state,
            cart: state.cart.filter((item) => item.productId !== action.id),
            totalCost: state.totalCost - currentItem.price,
          };
        }
      }
      case "removeAllFromCart": {
        return {
          ...state,
          cart: [],
          totalCost: 0,
        };
      }
      default:
        throw new Error("Unexpected action type in Cart Reducer");
    }
  };

  useEffect(() => {
    const fetchData = () =>
      fetch("https://dummyjson.com/products/")
        .then((res) => res.json())
        .then((json) => {
          //   console.log(json.products);
          json.products.slice(0, 4).forEach((product) => {
            addToCart({
              productId: product.id,
              productImage: product.images[0],
              productName: product.title,
              price: product.price,
            });
          });
        });

    fetchData();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "addToCart", item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "removeCart", id });
  };

  const removeAllFromCart = () => {
    dispatch({ type: "removeAllFromCart" });
  };

  const getTotalQuantity = () => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <nav
        className="navbar sticky-top navbar-dark bg-dark"
        style={{ height: "80px" }}
      >
        <div className="container-fluid">
          <div id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                >
                  Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    ({getTotalQuantity()})
                    <span className="visually-hidden">Cart Quantity</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container p-5">
        <h2>Shopping Cart</h2>
        {state.cart.length > 0 ? (
          <>
            {state.cart.map((item) => (
              <div key={item.productId} className="Container">
                <div className="row row-cols-1 row-cols-md-3 my-3 border rounded-4 p-2 justify-content-center align-items-center ">
                  <div className="col d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={item.productImage}
                      className="rounded object-fit-contain bg-white"
                      alt=""
                      height={"100px"}
                      width={"100px"}
                    />
                    <p>{item.productName}</p>
                  </div>
                  <div className="col d-flex flex-column justify-content-between align-items-center">
                    <button
                      onClick={() => addToCart(item)}
                      style={{ rotate: "180deg" }}
                    >
                      V
                    </button>

                    <p>{item.quantity}</p>
                    <button onClick={() => removeFromCart(item.productId)}>
                      V
                    </button>
                  </div>
                  <div className="col text-center">
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-end align-items-center my-3">
              <p>Total Cost: ${state.totalCost}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center my-3">
              <button
                className="my-3 btn btn-danger"
                onClick={removeAllFromCart}
              >
                Remove All
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default NewCart;
