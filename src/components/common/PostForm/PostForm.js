import style from './PostForm.module.css';
import React from "react";
import { Form, Field } from 'react-final-form'
import {composeValidators, minSymbol, required} from "../../utilits/validators/valodators";
import {Textarea} from "../FormsControls/FormsControls";


function PostForm(props) {

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => (
                <form className={style.newPost} onSubmit={handleSubmit}>
                    <Field validate={composeValidators(required, minSymbol(5))} className={style.fields} name="post" component={Textarea}  placeholder='Enter text'/>
                    <button type='submit'>Add Post</button>
                </form>
            )}
        />
    )
}

export default PostForm