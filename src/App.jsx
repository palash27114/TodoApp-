import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import Todoitem from "./components/Todoitem"
import "./App.css";
import Container from "./components/Container";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {


  const [Currentarray, setarray] = useState([]);

  const OnEnter = (itemName, itemduedate) => {
    console.log(itemName);
    console.log(itemduedate);
    const NewTodoitems = [...Currentarray, { name: itemName, date: itemduedate }];
    setarray(NewTodoitems);
  };

  const Ondelete = (itemName, itemdate) => {
    const isconfimed = window.confirm("you Want to delete the item " + itemName + " " + itemdate)
    if (isconfimed) {
      const NewTodoitems = Currentarray.filter((item) => item.name != itemName)
      setarray(NewTodoitems)
    }
  }




  return <center className="Todo-container ">
    <AppName></AppName>
    <div className="Sub" >
      <AddTodo ADDNew={OnEnter}></AddTodo>
      {Currentarray.length === 0 && <Welcome></Welcome>}
      <Container Todoitems={Currentarray}
        Deletion={Ondelete} ></Container>


    </div>


  </center>





}

export default App
