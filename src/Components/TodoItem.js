import React from 'react';
import '../Styles/TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';


const TodoItem = (props) => {

    //const onDelete = (event) => { alert('borraste el todo' + props.text + " id " + event.target.id) }
    return (
        <li className="TodoItem">
            {/* <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
             onClick={props.onCompleted}>√</span> */}
            <CompleteIcon completed={props.completed} onComplete={props.onCompleted}></CompleteIcon>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text} </p>
            {/* <span className="Icon Icon-delete" onClick={props.onDelete}>X</span> */}
            <DeleteIcon completed={props.completed} onDelete={props.onDelete}></DeleteIcon>
            <span>{props.completed} </span>
        </li>);

}
export { TodoItem };