import React from 'react'

class TransForm extends React.Component {
    state = {
        name: "",
        amount: "",
        t_date: "",
        category_id: 1,
    }

    setCategories = () => {
        return this.props.categories.map((catObj, indx) => <option key={indx} value={catObj.id}>{catObj.name}</option>)
    }

    changeHandler = (e) => {
        this.setState( {[e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        // Why is preventDefault not working? 
        
        // const transactionType = { transaction_type_id: e.target.id }

        console.log(e.target.id)
    }

    render() {
        return <form className="trans-form" id={this.props.typeId}>
            <input type="datetime-local" 
                name="t_date" 
                placeholder="" 
                value={this.state.t_date} 
                onChange={this.changeHandler}/>
            <input type="number" 
                name="amount" 
                placeholder="Amount" 
                value={this.state.amount}
                onChange={this.changeHandler}/>
            <input type="text" 
                name="name" 
                placeholder="Transaction Name" 
                value={this.state.name}
                onChange={this.changeHandler}/>
            <label htmlFor="category">Category</label>
            <select name="category_id" 
                value={this.state.category_id} 
                onChange={this.changeHandler}>
                {this.setCategories()}
            </select>
            <input type="submit" onSubmit={this.submitHandler}/>
        </form>
    }
}

export default TransForm