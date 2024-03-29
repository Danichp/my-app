import React from "react"
import classes from "./FormsControls.module.css"

export const FormControl = ({input, meta, child, ...props}) => {
    
    const hasError = meta.touched && meta.error
    return (
       <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            {props.child}
            {hasError && <span>{meta.error}</span>}
       </div> 
    )
}

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
       <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <textarea {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
       </div> 
    )
}


export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
       <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <input {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
       </div> 
    )

}
