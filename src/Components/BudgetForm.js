import React, {useEffect, useState} from 'react'

const BudgetForm = (props) => {    

    const [state, setState] = useState({
        name: "",
        amount: "",
        budgets: props.budgets
    })

    //--Fetch-Request-----------------------------------------------
    const createCategory = (name, amount) => {
        
        let options ={
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                budget: {
                    name: name,
                    amount: amount,
                    category_id: 2,
                    user_id: props.user_id
                }
            })
        }

        fetch(`http://localhost:3000/budgets`, options)
        .then(resp=>resp.json())
        .then(newBudget => setState(prevState=>{
            return ({
                budgets: [...prevState.budgets, newBudget]
            })
        }))
        .catch(console.log)
    }

    const changeHandler = (e) => {
        setState( {[e.target.name]: e.target.value })
    }
    const changeBudget = (e) => {
        console.log(e.target.value)
        let b_amount = state.budgets.filter(obj=>obj.name===e.target.value).map(ele=>ele.amount)[0]
        return setState({
            name: e.target.value,
            amount: b_amount
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        createCategory(e.target[0].value, e.target[1].value)
        console.log(e.target[0].value)
    }

    const renderForm = () => {
        return (
            <form onSubmit={submitHandler}>
            <input type="text" name="name" placeholder="name" onChange={changeHandler} value={state.name}/>
            <input type="number" name="amount" placeholder="amount"onChange={changeHandler} value={state.amount}/>
            <select value={state.name} onChange={changeBudget}>
                {state.budgets.map(obj=> { return (
                <option value={obj.name}>{obj.name}</option>
                )})}
            </select>
            <input type="submit" /> 
        </form>)
    }

    console.log("budgetform", state.name)
    console.log("budgetformstate", state.amount)
    return (
        renderForm()
    )
}

export default BudgetForm