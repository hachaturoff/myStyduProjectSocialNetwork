import {Field, Form} from 'react-final-form'
import style from "./MessageForm.module.css";
import React from "react";
import {required} from "../../utilits/validators/valodators";
import {Textarea} from "../FormsControls/FormsControls";


function MessageForm(props) {

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} className={style.sendMess}>
                    <Field validate={required} className={style.field} name="message" component={Textarea} placeholder="Write here"/>
                    <button type="submit">Send</button>
                </form>
            )}
        />
    )
}


export default MessageForm