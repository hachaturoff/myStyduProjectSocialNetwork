import React from "react";
import style from "./FormsControls.module.css"


export function Textarea({input, meta, ...props}) { // TODO сделать мень код, так что бы была одна функция

    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : null)}>

            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export function Input({input, meta, ...props}) {

    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : null)}>

            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

// active: false
// data: Object
// dirty: false
// dirtySinceLastSubmit: false
// error: undefined
// initial: (...)
// invalid: (...)
// length: (...)
// modified: (...)
// modifiedSinceLastSubmit: (...)
// pristine: (...)
// submitError: undefined
// submitFailed: (...)
// submitSucceeded: (...)
// submitting: (...)
// touched: (...)
// valid: (...)
// validating: (...)
// visited: (...)