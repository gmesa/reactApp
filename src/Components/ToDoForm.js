import React from "react";
import { ToDoContext } from "../ItemContext/contextToDo";


const ToDoForm = () => {

    //const [newItem, setNewItem] = React.useState('');
    const {addItemToDO,setOpenModal } = React.useContext(ToDoContext);
    
const onSubmit = (event)=>{

    event.preventDefault();
    let txtArea = document.getElementById('toDoName');
    addItemToDO(txtArea.value);
    txtArea.value = '';
    setOpenModal(false);
};

const onCancel = ()=>{

    document.getElementById('toDoName').value = '';
    setOpenModal(false);
};

    return (
        <form onSubmit={onSubmit}>
            
            <label> Escribe el nombre del TODO </label>
            <textarea id="toDoName" placeholder="Escribe el nombre del todo">

            </textarea>

            <div>
                <button id="cancel" onClick={onCancel}>Cancelar</button>
                <button id="ok" type="submit">Anadir</button>
            </div>

        </form>
    );
}

export { ToDoForm }

