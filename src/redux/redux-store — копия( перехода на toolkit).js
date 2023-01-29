
import {
    // combineReducers,
    configureStore} from "@reduxjs/toolkit";
import {applyMiddleware,
    // legacy_createStore
} from "redux";
import thunkMiddleware from "redux-thunk"

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

// TODO перевести на  redux toolkit

// let reducers = combineReducers({
//     profilePage: profileReducer, // ключ profilePage - аналогичен state.profilePage в old-store
//     dialogsPage: dialogsReducer,
//     sideBar: sideBarReducer,
//     usersPage: usersReducer,
//     auth: authReducer,
//     app: appReducer
//
// })

// export const setupStore = () => {
//     return configureStore({
//         reducers
//     })
// }

// let store = legacy_createStore(reducers , applyMiddleware(thunkMiddleware)) // legacy_createStore создаёт внутри себя state с редьсерами

export const store = configureStore({
             reducer: {
                 profilePage: profileReducer, // ключ profilePage - аналогичен state.profilePage в old-store
                 dialogsPage: dialogsReducer,
                 sideBar: sideBarReducer,
                 usersPage: usersReducer,
                 auth: authReducer,
                 app: appReducer
             }
             // ,             middleware: applyMiddleware(thunkMiddleware)
}
)

export default store
