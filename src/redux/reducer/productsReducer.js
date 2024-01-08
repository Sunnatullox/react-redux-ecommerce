const productInitialValue = {
  loading: false,
  products: [],
  error: null,
};

const cartInitialValue = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
const singleProductInitialValue = {
  loading: false,
  singleProduct: null,
  error: null,
};
const recomendProductInitialValue = {
  loading: false,
  recommenProducts: [],
  error: null,
};

export const productsReducer = (state = productInitialValue, action) => {
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
    default:
      return state;
  }
};

export const recomendProductReducer = (
  state = recomendProductInitialValue,
  action
) => {
  switch (action.type) {
    case "RECOMEND_PRODUCTS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_PRODUCT_RECOMMEN_SUCCESS":
      return {
        ...state,
        recommenProducts: action.payload,
        loading: false,
      };
    case "RECOMEND_PRODUCTS_FAILED":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const singleProductReducer = (
  state = singleProductInitialValue,
  action
) => {

  switch (action.type) {
    case "SINGLE_PRODUCTS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        singleProduct: action.payload,
      };
    case "SINGLE_PRODUCTS_FAILED":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const cartReducer = (state = cartInitialValue, action) => {
  switch (action.type) {
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
