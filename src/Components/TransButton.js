import React from 'react'

const TransButton = (props) => {
    return <div className="trans-button" id={props.id} onClick={props.clickHandler}>
        <h2 id={props.id}>{props.text}</h2>
    </div>
}

export default TransButton 