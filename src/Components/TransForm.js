import React from 'react'

class TransForm extends React.Component {
    state = {
        name: "",
        amount: "",
        t_date: "",
        category_id: "1",
    }

    componentDidMount = () => {
        const defaultDate = this.getCurrentDate()
        this.setState({t_date: defaultDate})
        if(this.props.transactionToEdit) {
            this.setState(this.props.transactionToEdit)
        }
    }

    getCurrentDate = () => {
        const today = new Date()
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    }

    setCategories = () => {
        return this.props.categories.map((catObj, indx) => <option key={indx} value={catObj.id}>{catObj.name}</option>)
    }

    changeHandler = (e) => {
        this.setState( {[e.target.name]: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const transactionType = { transaction_type_id: e.target.id }
        const userId = { user_id: this.props.userId }
        const tObject = {...this.state, ...transactionType, ...userId}
        tObject.amount = Number(tObject.amount)
        const defaultDate = this.getCurrentDate()
        
        this.props.transactionToEdit ? this.props.editHandler(tObject) : this.props.submitHandler(tObject)

        this.setState(() => {
            return {
                name: "",
                amount: "",
                t_date: defaultDate,
                category_id: "",
            }
        }, this.props.hideForm())
    }

    render() {
        return (
            <form className="trans-form" id={this.props.typeId} onSubmit={this.localSubmitHandler}>
                <input type="date" 
                    name="t_date"  
                    value={this.state.t_date} 
                    onChange={this.changeHandler}/>
                <input type="number" 
                    name="amount"
                    placeholder="Amount" 
                    value={this.state.amount}
                    onChange={this.changeHandler}/>
                <input className="transac-name"type="text" 
                    name="name" 
                    placeholder="Transaction Name" 
                    value={this.state.name}
                    onChange={this.changeHandler}/>
                <select className="select" name="category_id" 
                    value={this.state.category_id} 
                    onChange={this.changeHandler}>
                    <option>Category</option>
                    {this.setCategories()}
                </select>
                <p onClick={this.props.modalHandler}><i>Add Category</i></p>
                <div className="submit-btn">
                    <input type="submit"/>
                </div>
                <h3 onClick={this.props.hideForm}>x</h3>
            </form>
        )
    }
    
}

export default TransForm