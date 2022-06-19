import React from 'react';
import { ToDoContext } from '../ItemContext/contextToDo';
import '../Styles/TodoSearch.css';


function TodoSearch() {
const {searchValue, SetSearchVaslue} = React.useContext(ToDoContext);
    return (
        <>
            <input className="TodoSearch" placeholder="Cebolla" value={searchValue} onChange={(event) => SetSearchVaslue(event.target.value)} />
            <p>
                {searchValue}
            </p>
        </>
    );
}
export { TodoSearch };