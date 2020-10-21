import React from 'react'

const FilterBox = (props) => {    
    const renderOptions = () => {
        let labels = props.transactions
        let unique = [...new Set(labels)]
        return unique.map(ele=>{
            return <option value={ele}>{ele}</option>
        })
    }

    const changehandler = (e) => {
        props.changeState(e.target.value)
    }

    return (
        <label for="transactions">Choose a transaction:</label>,
        <select value={props.f_value} onChange={changehandler}>{renderOptions()}</select>
    )
}

export default FilterBox