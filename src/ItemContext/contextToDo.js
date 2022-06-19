import React from "react";
import { useLocalStore } from "./useLocalStorage"

const ToDoContext = React.createContext();

function ToDoProvider(props) {

    const { items, saveitems, loading, error,  } = useLocalStore("TODO_V1", []);
    const [searchValue, SetSearchVaslue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const countTotalTodo = items.length;
    const completedTodo = items.filter(t => t.completed).length;

    let filterTodos = [];

    if (!searchValue.length >= 1) {
        filterTodos = items;
    } else {
        filterTodos = items.filter(t => {

            let txt = t.text.toLowerCase();
            let valueLower = searchValue.toLowerCase();

            return txt.includes(valueLower);

        });
    }

    const completeTodos = (text) => {

        const allTodos = [...items];
        allTodos.forEach(element => {
            if (element.text.localeCompare(text) == 0)
                element.completed = true;
        });

        saveitems(allTodos);
    }

    const delteToDo = (text) => {
        const newToDos = items.filter(t => t.text !== text);
        saveitems(newToDos);

    }

    const addItemToDO = (text)=>{
      let item = 
       {"text":text,
        "completed":false}

        let allItemList = [...items];
        allItemList.push(item);
        saveitems(allItemList);
    }

    return (
        <ToDoContext.Provider value={
            {
                countTotalTodo,
                completedTodo,
                searchValue,
                SetSearchVaslue,
                filterTodos,
                completeTodos,
                delteToDo,
                loading,
                error,
                openModal,
                setOpenModal,
                addItemToDO

            }
        }>
            {props.children}
        </ToDoContext.Provider>

    );
}
export { ToDoContext, ToDoProvider };