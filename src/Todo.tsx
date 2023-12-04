import React from 'react'
import TodoItem from './TodoItem.tsx'
import { IItem } from './model.tsx'


interface IList{
  list:IItem[]
}


 const Todo: React.FC<IList>= ({list}) => {
  return (
    <ul>
        {list.map((item) => < TodoItem key={item.id} {...item}/>)}
    </ul>
  )
}

export default Todo;