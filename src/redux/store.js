import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducers";

const middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { store, persistStore };
