import { useContext } from 'react';
import { TodoContext } from "./Context/TodoContext";
import './App.css';
import InputForm from './Components/Input';
import {Button,Text} from '@chakra-ui/react'

function App() {
  const { dispatch,todo }=useContext(TodoContext)
  
  return (
    <div className="App">
      <InputForm />
      <ul>
        {todo.map((el,index)=>{
          return (
            <li key={index}>
              <Text fontSize="xx-large">{el.name}</Text>{" "}
              <Button
                colorScheme="red"
                onClick={() => {
                  dispatch({ type: "remove", index });
                }}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
      <br/>
    </div>
  );
}

export default App;