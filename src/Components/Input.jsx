import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { Heading, Input } from "@chakra-ui/react";
const InputForm = () => {
  const { Inputref, handelSubmit } = useContext(TodoContext);
  return (
    <div>
      <div className="head">
        <Heading>Todo App</Heading>
        <hr />
      </div>
        <br />
      <form className="form">
        <Input
          borderColor="black.500"
          width="e-sm"
          text="text"
          placeholder="Enter Todo"
          ref={Inputref}
        />
        <Input backgroundColor="blue"
          width="e-sm"
          fontSize="2xl"
          fontWeight="semo"
          type="submit"
          onClick={handelSubmit}
        />
      </form>
    </div>
  );
};

export default InputForm;