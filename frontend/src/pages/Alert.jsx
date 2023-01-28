import React from 'react'

export const Alert = (props) => {
    console.log("Alert")
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
} 
export default Alert;