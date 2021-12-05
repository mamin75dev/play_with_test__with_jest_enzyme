import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

export const middlware = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middlware)(createStore);

export default createStoreWithMiddleware(rootReducer);
