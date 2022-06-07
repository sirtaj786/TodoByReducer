import { createContext, useReducer, useRef } from "react";

export const TodoContext=createContext()

export const ContextProvider=({children})=>{

    const todoReducer = (todo, action) => {
      switch (action.type) {
        case "add": {
          return [
            ...todo,
            {
              name: action.name,
            },
          ];
        }
        case "remove": {
          return todo.filter((el, index) => index !== action.index);
        }
        default:
          return todo;
      }
    };
    
    const [todo, dispatch] = useReducer(todoReducer, []);
    const Inputref = useRef(null);


    const handelSubmit = (e) => {
      e.preventDefault();
      dispatch({
        type: "add",
        name: Inputref.current.value,
      });
      Inputref.current.value = " ";
    };

    const value={todoReducer,handelSubmit,Inputref,todo,dispatch}
    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider> 
    )
}