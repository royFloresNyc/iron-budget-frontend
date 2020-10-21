import React from 'react'

const BudgetForm = (props) => {    

    const changehandler = (e) => {
        props.changeState(e.target.value)
    }

    return (
        <form>
            <input type="text"/>
        </form>
    )
}

export default BudgetForm