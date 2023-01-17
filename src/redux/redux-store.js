import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer copy";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer copy";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);


export default store
 