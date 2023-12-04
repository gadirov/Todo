import React, { useContext, useState } from 'react'
import {TodoContext} from './Todos.tsx'
import { IItem } from './model.tsx';

// Start Type Section 
interface ITodoItem extends IItem{}
// End Type Section


const TodoItem: React.FC<ITodoItem> = ({id, text, completed}) => {

    const [editInputValue, setEditInputValue] = useState<string>(text);
    const [isEdited, setIsEdited] = useState<Boolean>(false);
    const { deleteHandler, editTodoHandler } = useContext(TodoContext);

    const editHandler = () => {
        editTodoHandler({id, text: editInputValue, completed: false})
        setIsEdited(!isEdited)
    }

    const toggleHandler = () => {
        editTodoHandler({id, text, completed: !completed})
    }

  return (
    <li className={ completed ? "done" : "" }>
        { !isEdited && <span onClick={ () => toggleHandler() }>{text}</span>}
        {isEdited && <input type='text' value={ editInputValue }  onChange={(e) => setEditInputValue(e.target.value)}/>}
        {!isEdited && <button onClick={ () => deleteHandler(id) }>Delete</button>}
        <button onClick={ () => { editHandler() } } >{ isEdited ? "Save" : "Edit" }</button>
    </li>
  )
}

export default TodoItem;