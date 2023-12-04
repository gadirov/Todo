import React, { FormEvent, createContext, useState } from "react";
import Todo from "./Todo.tsx";
import { IItem } from "./model.tsx";
import { IHandlerFuncs } from "./model.tsx";

export const TodoContext  = createContext <IHandlerFuncs>({
  deleteHandler: () => {},
  editTodoHandler: () => {},
});

const Todos = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<IItem[]>([]);

  const submitHandler = (e:FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    } else {
      setList([
        ...list,
        { id: list.length, text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };
  const deleteHandler = (id: number) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const editTodoHandler = (item: IItem) => {
    const transformedList = list.map((listItem) => {
      if (listItem.id === item.id) {
        return item;
      } else {
        return listItem;
      }
    });
    setList(transformedList);
  };

  return (
    <TodoContext.Provider value={{ deleteHandler, editTodoHandler }}>
      <form onSubmit={submitHandler}>
        <input
          value={inputValue}
          type="text"
          placeholder="Add a todo..."
          onChange={(e) => {
          setInputValue(e.target.value);
          }}
        />
        <input type="submit" />
        <Todo list={list} />
      </form>
    </TodoContext.Provider>
  );
}

export default Todos;