import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";

let oldStore = {
    _state : {

        dialogsPage:
            {
                message:
                    [
                        {id: 1, message: 'HI Oleg, how are you'},
                        {id: 2, message: 'Yu Bro, where my Money'},
                        {id: 1, message: 'pss,did you need some hot?'},
                        {id: 1, message: 'Are You speak Russia?'},
                        {id: 2, message: 'Hello my friend, I hear how you call on help'},
                        {
                            id: 2,
                            message: 'The items are packed flush to each other against the edge of the alignment container depending.'
                        }
                    ],
                newMessageText: "",
                dialogs:
                    [
                        {id: 1, name: 'Oleg'},
                        {id: 2, name: 'Sergre'},
                        {id: 3, name: 'Timur'},
                        {id: 4, name: 'Dima'}
                    ]
            },


    _reRender()  {
        console.log('State')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._reRender = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._reRender(this._state)
    }
}

export default oldStore

