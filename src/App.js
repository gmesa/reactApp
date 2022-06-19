import React from 'react';
import { MainContApp } from './Components/MainContApp';
import {ToDoProvider} from './ItemContext/contextToDo'


// const todosDefault = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false }];




function App(props) {

  return (
   <ToDoProvider>
     <MainContApp  />
   </ToDoProvider>

  );
}


export default App;