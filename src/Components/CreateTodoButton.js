import React from 'react';
import '../Styles/CreateTodoButton.css';


function CreateTodoButton(props) {

    const clickToOpen = (e) => {
        e.preventDefault();
        props.setOpenModal(prevState=> !prevState);
    }
    return (
        <button type='button' className="CreateTodoButton" onClick={clickToOpen}>
            +</button>);
}
export { CreateTodoButton };