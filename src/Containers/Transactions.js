import React from 'react'
import TransButton from '../Components/TransButton'
import TransForm from '../Components/TransForm'
import Transaction from '../Components/Transaction'
import ReactModal from 'react-modal'
import CategoryForm from '../Components/CategoryForm'

import { SearchOrSortForm } from '../Components/SearchOrSortForm'


class Transactions extends React.Component{
    state = {
        expBtnClicked: false,
        incmBtnClicked: false,
        showForm: false,
        transactionToEdit: undefined,
        searchVal: '',
        sort: false,
        showModal: false,
    }

    modalHandler = () => {
        this.setState(prevState => {
            return { showModal: !prevState.showModal }
        })
    }

    renderCategoryForm = () => {
        return <CategoryForm createCategory={this.props.createCategory}/>
    }
    getTransactions = () => {
        let tList = this.props.transactions
        if(this.state.sort) {
            tList = this.groupTransByCategory()
        }
        return tList.filter( transac => transac.name.toLowerCase().includes(this.state.searchVal.toLowerCase()))
    }

    getSortedCategoriesByName = () => {
        if(this.props.debit_categories) { 
            let categories = (this.props.debit_categories).concat(this.props.credit_categories) //combine all categories into one flat array
            return categories.sort((catA, catB) => {
                let nameA = catA.name.toUpperCase()
                let nameB = catB.name.toUpperCase()
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        }
    }

    groupTransByCategory = () => {
        if(this.props.debit_categories) {
            const sortedCategories = this.getSortedCategoriesByName()
            let newArrayOfTrans = []
            sortedCategories.forEach(cat => {
                let groupedTransac = this.props.transactions.filter(trans => trans.category_id === cat.id)
                newArrayOfTrans.push(groupedTransac)
            })
            let dateToFormat = newArrayOfTrans.flat()[0].t_date
            return newArrayOfTrans.flat()
        }
    }

    sortHandler = () => {
        this.setState(prevState => {
            return { sort: !prevState.sort }
        })
    }

    searchHandler = (value) => {
        this.setState({ searchVal: value })
    }

    renderTransactions = (tList) => {
        return tList.map((trans, indx) => <Transaction key={indx} 
            transaction={trans} deleteHandler={this.props.deleteHandler}
            editClickHandler={this.editClickHandler}
            categories={this.props.credit_categories.concat(this.props.debit_categories)}/>)
    }

    transactionBtnHandler = (e) => {
        const buttonId = e.target.id
        this.setState(() => {
            if(buttonId === "expBtnClicked"){
                return {
                    expBtnClicked: true,
                    incmBtnClicked: false,
                    showForm: true
                }
            } else {
                return {
                    expBtnClicked: false,
                    incmBtnClicked: true,
                    showForm: true
                }
            }
        })
    }

    getTransactionTypeId = (name) => {
        return this.props.transaction_types.find(obj => obj.name === name).id
    }

    hideForm = () => {
        this.setState({ showForm: false, transactionToEdit: undefined })
    }

    editClickHandler = (transaction) => {
        if(transaction.transaction_type_id === 1){
            this.setState({
                expBtnClicked: false,
                incmBtnClicked: true,
                showForm: true,
                transactionToEdit: transaction
            })
        } else {
            this.setState({
                expBtnClicked: true,
                incmBtnClicked: false,
                showForm: true,
                transactionToEdit: transaction
            })
        }
    }

    render() {
        return <div className="trans-container">
            <TransButton text=" + Income" id="incmBtnClicked" clickHandler={this.transactionBtnHandler}/>
            <TransButton text=" - Expense" id="expBtnClicked" clickHandler={this.transactionBtnHandler}/>
            <hr/>
            { this.state.showForm ? 
                <TransForm typeId={this.state.expBtnClicked ? this.getTransactionTypeId("Debit") : this.getTransactionTypeId("Credit")}
                    categories={this.state.expBtnClicked ? this.props.debit_categories : this.props.credit_categories}
                    submitHandler={this.props.submitHandler}
                    editHandler={this.props.editHandler}
                    modalHandler={this.modalHandler}
                    hideForm={this.hideForm}
                    transactionToEdit={this.state.transactionToEdit}
                    userId={this.props.id} /> 
                : 
                <SearchOrSortForm searchVal={this.state.searchVal} searchHandler={this.searchHandler} sortHandler={this.sortHandler}/>
            }
            <div className="transactions">
                {this.renderTransactions(this.getTransactions())}
            </div>
            <ReactModal 
                isOpen={this.state.showModal}
                contentLabel="Category Modal"
            >
            <button onClick={this.modalHandler}>Close Form</button>
                {this.renderCategoryForm()}
            </ReactModal>
        </div>
    }

}

export default Transactions