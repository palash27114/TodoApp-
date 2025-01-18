import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({ ADDNew }) {


const [text,settext]=useState();
const [date,setdate]=useState();
const handleNamechange=(event)=>{
 settext(event.target.value);
}
const handleDatechange=(event)=>{
  setdate(event.target.value);
 
}

const handleaddbutton=()=>{
   ADDNew(text,date);
   setdate("");
   settext("");
}

  return <div class="row ">
    <div class="col-6"> <input type="text" placeholder="Enter Your Task"value={text} onChange={handleNamechange}/></div>

    <div class="col-4"><input type="date"value={date}  onChange={handleDatechange} /></div>
    <div class="col-2"><button type="button" class="btn btn-primary" 
    onClick={()=>{
      if(text ==="" && date ===""){
      alert("enter Your Work and DATE ");
      }
      else{
        handleaddbutton();
      } 
  }} ><IoIosAddCircleOutline /></button></div>
  </div>
}
export default AddTodo;