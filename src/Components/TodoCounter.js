import React from 'react';
import {ToDoContext} from './../ItemContext/contextToDo'
import '../Styles/TodoCounter.css';

function TodoCounter() {

    const {countTotalTodo, completedTodo} = React.useContext(ToDoContext);

    return (
        <h2 className="TodoCounter">Has completado {completedTodo} de {countTotalTodo} TODOs</h2>
    );
}
export { TodoCounter };