const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    message:
        [
            {id: 1, message: 'HI Oleg, how are you'},
            {id: 2, message: 'Yu Bro, where my Money'},
            {id: 3, message: 'pss,did you need some hot?'},
            {id: 4, message: 'Are You speak Russia?'},
            {id: 5, message: 'Hello my friend, I hear how you call on help'},
            {
                id: 6,
                message: 'The items are packed flush to each other against the edge of the alignment container depending.'
            }
        ],
    dialogs:
        [
            {id: 1, name: 'Oleg'},
            {id: 2, name: 'Sergre'},
            {id: 3, name: 'Timur'},
            {id: 4, name: 'Dima'}
        ]
}


/////////////////////////////////////////////////////////////////////



const dialogsReducer = ( state = initialState , action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {

                message: [...state.message, {id: 25, message: action.message}]
            }

        default:
            return state
    }

}


///////////////////////////////////////////////////////////////

export const addMessageAC = (message) =>  ({ type: ADD_MESSAGE, message })







export default dialogsReducer