import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import {
  cartReducer,
  productsReducer,
  recomendProductReducer,
  singleProductReducer,
} from "./reducer/productsReducer";

const rootReducer = combineReducers({
  productReducer: productsReducer,
  cartReducer: cartReducer,
  singleProdReducer: singleProductReducer,
  recomendProdReducer: recomendProductReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
