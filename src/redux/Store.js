import { applyMiddleware, combineReducers, createStore } from "redux";
import staffs from "./staffs"
import Department from "./Department"
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const store = createStore(combineReducers({
    staffs: staffs,
    department: Department

}),
applyMiddleware(thunk,logger)
)
console.log("staffs12", staffs)

export default store;