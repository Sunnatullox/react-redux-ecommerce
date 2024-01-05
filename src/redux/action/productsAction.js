import axios from "axios";

export const getAllProducts = (toast, filter) => async (dispatch) => {
  dispatch({ type: "PRODUCTS_LOADING" });
  const productURL = filter
    ? `https://fakestoreapi.com/products/category/${filter}`
    : "https://fakestoreapi.com/products";
  try {
    const { data, status } = await axios.get(productURL);
    if (status === 200) {
      dispatch({ type: "PRODUCTS_SUCCESS", payload: data });
    }
  } catch (error) {
    toast.succes(error.message);
    dispatch({ type: "PRODUCTS_FAILED", error: error.message });
  }
};

export const getSingleProduct = (id, toast) => async (dispatch) => {
  dispatch({ type: "SINGLE_PRODUCTS_LOADING" });
  try {
    const { data, status } = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    if (status === 200) {
      dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: data });
    }
  } catch (error) {
    toast.succes(error.message);
    dispatch({ type: "SINGLE_PRODUCTS_FAILED", error: error.message });
  }
};

export const getRecommendationProduct =
  (category, toast) => async (dispatch) => {
    dispatch({ type: "RECOMEND_PRODUCTS_LOADING" });
    try {
      const { data, status } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      if (status === 200) {
        dispatch({ type: "GET_PRODUCT_RECOMMEN_SUCCESS", payload: data });
      }
    } catch (error) {
      toast.succes(error.message);
      dispatch({ type: "RECOMEND_PRODUCTS_FAILED", error: error.message });
    }
  };

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: "ADD_TO_CART", payload: product });
};

export const incrementProductItem = (id) => (dispatch) => {
  dispatch({ type: "INCREASE_PRODUCT_ITEM", payload: id });
};
export const decrementProductItem = (id) => (dispatch) => {
  dispatch({ type: "DECREMENT_PRODUCT_ITEM", payload: id });
};
export const removeProductItem = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_PRODUCT_ITEM", payload: id });
};
