import React from 'react'

const SearchOrSortForm = ( { searchVal, searchHandler, sortHandler}) => {

    // const [searchVal, setSearchVal] = useState('')

    // const changeHandler = (e) => {
    //     setSearchVal(e.target.value)
    // }

    return (
        <div>
            <input type="text" value={searchVal} onChange={(e) => searchHandler(e.target.value)}/>
            <div className="sort" onClick={sortHandler}>
                Sort
            </div>
        </div>
    )
}
export { SearchOrSortForm }