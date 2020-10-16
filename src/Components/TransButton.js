import React from 'react'

const TransButton = (props) => {
    return <div className="trans-button" id={props.id} onClick={props.clickHandler}>
        {props.text}
    </div>
}

export default TransButton 