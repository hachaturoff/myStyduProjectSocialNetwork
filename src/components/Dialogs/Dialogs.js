import style from './Dialogs.module.css';
import PersonDialog from "./PersonDialog/PersonDialog";
import PersonMessage from "./PersonMessage/PersonMessage";
import React from "react";
import MessageForm from "../common/MessageForm/MessageForm";


function Dialogs(props) {
    let state = ''

    let dialogsElement = props.dialogsPage.dialogs.map(dialog =>  <PersonDialog name={dialog.name} key={dialog.id} id={dialog.id}/>)

    let messageElement = props.dialogsPage.message.map(m => {
        if (m.id % 2 === 0) {
            return <PersonMessage styl='right' key={m.id} message={m.message}/>
        }
        if (m.id % 1 === 0) {
            return  <PersonMessage styl='left' key={m.id} message={m.message}/>
        }
    });


    let onSubmit = (formData) => {

        let {message} = formData
        return props.onSendMessage(message)

    }



    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                { dialogsElement }
            </div>

            <div className={style.windowMessage}>
                <div className={style.messages} >
                    {messageElement}
                </div>

                <div className={style.footerMessage}>
                    <MessageForm state={state} onSubmit={onSubmit}/>
                </div>

            </div>
        </div>
    )
}

export default Dialogs