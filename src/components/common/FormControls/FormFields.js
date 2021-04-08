import React from 'react'
import er from './FormFields.module.css'

export const Textarea = ({input, meta, ...props}) => {
let isError = meta.error && meta.touched
    return (
    <div className={isError && er.error}>
        <textarea {...input} {...props}/>
        {isError && <span>{meta.error}</span>}
         </div>
)
}

export const Input = ({input, meta, ...props}) => {
    let isError = meta.error && meta.touched
        return (
        <div className={isError && er.error}>
            <input {...input} {...props}/>
            {isError && <span>{meta.error}</span>}
             </div>
    )
    }