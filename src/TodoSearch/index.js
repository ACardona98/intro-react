import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch () {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };
    return [
        <input placeholder="Cebolla" onChange={onSearchValueChange}/>,
        <p>{searchValue}</p>
    ];
}
export { TodoSearch };