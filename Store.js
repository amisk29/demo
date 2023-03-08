import { configurStore} from "@reduxjs/toolkit";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./Reducer";

const middleware=[thunk];
const store=configurStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;