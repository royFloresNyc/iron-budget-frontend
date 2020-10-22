import React, {useState} from 'react'

const CategoryForm = (props) => {
    const [state, setState] = useState({
        name: "",
        transaction_type_id: "",
    })
    const changeHandler = (e) => {
        this.setState( {[e.target.name]: e.target.value })
    }

    const renderForm = () => {
        return (<form>
            <input name="name" placeholder="name" value={state.name} onChange={changeHandler}/>
            <select>
                <option value="1">Credit</option>
                <option value="2">Debit</option>
            </select>
            <input type="submit"/>
        </form>)
    }

    return (
        renderForm()
    )

}

export default CategoryForm