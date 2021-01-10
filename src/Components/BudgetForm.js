import React, {useState} from 'react'

const BudgetForm = (props) => {    

    const [state, setState] = useState({
        name: props.budgets[0].name,
        amount: props.budgets[0].amount,
        b_id: props.budgets[0].id
    })

    //--Fetch-Request-----------------------------------------------


    const changeHandler = (e) => {
        return setState( {[e.target.name]: e.target.value })
    }
    const changeBudget = (e) => {
        let needed = e.target.value
        let conv_id = parseInt(needed, 10) 
        let b_amount = props.budgets.filter(obj=>obj.id===conv_id).map(ele=>ele.amount)[0]
        let b_name = props.budgets.filter(obj=>obj.id===conv_id).map(ele=>ele.name)[0]
        return setState({
            name: b_name,
            amount: b_amount,
            b_id: conv_id
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        props.createBudget(e.target[0].value, e.target[1].value, e.target[2].value)
        props.closeModal()
    }

    const renderForm = () => {
        return (
            <form className="category-form" onSubmit={submitHandler}>
            <input type="text" name="name" placeholder="name" onChange={changeHandler} value={state.name}/>
            <input type="number" name="amount" placeholder="amount"onChange={changeHandler} value={state.amount}/>
            <select className="select" value={state.b_id} onChange={changeBudget}>
                {props.budgets.map(obj=> { return (
                <option value={obj.id}>{obj.name}</option>
                )})}
            </select>
            <input type="submit" /> 
            <h3 onClick={props.closeModal}>x</h3>
        </form>)
    }

    return (
        renderForm()
    )
}

export default BudgetForm