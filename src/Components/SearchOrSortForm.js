import React from 'react'

const SearchOrSortForm = ( { searchVal, searchHandler, sortHandler}) => {

    // const [searchVal, setSearchVal] = useState('')

    // const changeHandler = (e) => {
    //     setSearchVal(e.target.value)
    // }

    return (
        <div className="search-bar">
            <input className="search" type="text" placeholder="Search..." value={searchVal} onChange={(e) => searchHandler(e.target.value)}/>
            <div className="sort" onClick={sortHandler}>
                Sort By Category
            </div>
        </div>
    )
}
export { SearchOrSortForm }