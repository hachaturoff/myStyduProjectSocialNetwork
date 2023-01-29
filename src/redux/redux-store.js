
import { configureStore} from "@reduxjs/toolkit";


import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";


// let reducers = combineReducers({
//     profilePage: profileReducer, // ключ profilePage - аналогичен state.profilePage в old-store
//     dialogsPage: dialogsReducer,
//     sideBar: sideBarReducer,
//     usersPage: usersReducer,
//     auth: authReducer,
//     app: appReducer
//
// })


let store = configureStore({
             reducer: {
                 profilePage: profileReducer,
                 dialogsPage: dialogsReducer,
                 sideBar: sideBarReducer,
                 usersPage: usersReducer,
                 auth: authReducer,
                 app: appReducer
             }}
)

export default store
