let initialState = {
    friends: [
        {
            name: 'Oleg',
            ava: "https://cdn131.picsart.com/329941653033201.jpg",
            id: 1
        },
        {
            name: 'Timur',
            ava: "https://otvet.imgsmail.ru/download/49274179_446d97905891dfb3fae883eabaeb5ae8_800.jpg",
            id: 2
        },
        {
            name: 'Dimich',
            ava: "https://basik.ru/images/fun_person/15_fun_small_person.jpg",
            id: 3
        }
    ]
}

const sideBarReducer = ( state = initialState, action) => {
    return state
}

export default sideBarReducer