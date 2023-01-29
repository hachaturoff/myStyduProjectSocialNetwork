import React from "react";
import {addMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



let DialogsAuthRedirectComponent = withAuthRedirect(Dialogs)

function DialogsContainer() {

    const dispatch = useDispatch()
    const dialogsPage = useSelector(state => state.dialogsPage)
    const isAuth = useSelector(state => state.auth.isAuth)





    let sendMessage = (message) => {
        dispatch(addMessageAC(message))
    }




    return <DialogsAuthRedirectComponent
        onSendMessage={sendMessage}
        dialogsPage={dialogsPage}
        isAuth={isAuth}

        />

}
export default DialogsContainer
