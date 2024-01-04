const initialValue = {
  loading: false,
  products: [],
  singleProduct: null,
  recommenProducts: [],
  error: null,
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const productsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "PRODUCTS_FAILED":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case "GET_SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload,
        loading: false,
      };
    case "GET_PRODUCT_RECOMMEN":
      return {
        ...state,
        recommenProducts: action.payload,
        loading: false,
      };
    case "ADD_TO_CART":
      const findProd = state.cart.find((c) => c.id === action.payload.id);
      if (!findProd) {
        const product = [...state.cart, { ...action.payload, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(product));
        return {
          ...state,
          cart: product,
        };
      } else if (findProd) {
        const product = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(product));
        return {
          ...state,
          cart: product,
        };
      }
      break;
    case "INCREASE_PRODUCT_ITEM":
      const incProduct = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(incProduct));
      return {
        ...state,
        cart: incProduct,
      };
    case "DECREMENT_PRODUCT_ITEM":
      const decProduct = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(decProduct));
      return {
        ...state,
        cart: decProduct,
      };
    case "REMOVE_PRODUCT_ITEM":
      const removeProduct = state.cart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(removeProduct));
      return {
        ...state,
        cart: removeProduct,
      };
    default:
      return state;
  }
};
