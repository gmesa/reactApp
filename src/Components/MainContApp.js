import React from 'react';
import { ToDoContext } from '../ItemContext/contextToDo';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { ToDoForm } from './ToDoForm';


const MainContApp = () => {

    const { error,
        loading,
        filterTodos,
        completeTodos,
        delteToDo,
        openModal,
        setOpenModal
    } = React.useContext(ToDoContext);

    return (

        <React.Fragment>

            <TodoCounter />
            <TodoSearch />
           
            <TodoList>
                {error && <p>Hay un error en la aplicacion</p>}
                {loading && <p>Esta cargando la aplicacion</p>}
                {(!loading && filterTodos.length == 0) && <p>Crea tu primer todo</p>}
                {filterTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onCompleted={() => completeTodos(todo.text)}
                        onDelete={() => delteToDo(todo.text)}
                    />)
                )}

            </TodoList>
            {openModal && (
            <Modal>
                <ToDoForm>
                    
                </ToDoForm>
           </Modal>
           )}           

            <CreateTodoButton openModal = {openModal} setOpenModal = {setOpenModal} />
        </React.Fragment>
    );

}

export { MainContApp } 
