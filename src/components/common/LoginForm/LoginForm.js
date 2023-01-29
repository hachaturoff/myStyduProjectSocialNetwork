import style from "./LoginForm.module.css";
import React from "react";
import { Form, Field } from 'react-final-form'
import {composeValidators, minSymbol, required} from "../../utilits/validators/valodators";
import {Input} from "../FormsControls/FormsControls";


function LoginForm(props) { // TODO сделать валидацию на логин и пароль

    return   (
            <Form
                isAuth={props.isAuth}
                validate={props.validate}
                onSubmit={props.onSubmit}


                render={({handleSubmit}) => (
                    <form className={style.wrapper} onSubmit={handleSubmit}>
                        <div>
                            <Field name="login" type="text" validate={composeValidators(required, minSymbol(5))} component={Input} placeholder={`Login`}/>
                        </div>
                        <div>
                            <Field name="password" type="text" validate={composeValidators(required, minSymbol(5))} component={Input} placeholder={`Password`}/>
                        </div>
                        <div>
                            <Field  name="rememberMe" component="input" type="checkbox"/> remember me
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                )}>

            </Form>
            )
    }


export default LoginForm