import style from './Todoitem.module.css'
import { MdDelete } from "react-icons/md";
function Todoitem({TodoName,Tododate,deleteditem}) {

    return  <div className={`row ${style['kg-row']} hello`}>
    <div class="col-6 ">{TodoName} </div>
    <div class="col-4">{Tododate}</div>
    <div class="col-2"><button type="button" class="btn btn-danger" onClick={()=>deleteditem(TodoName,Tododate)}><MdDelete /></button></div>
  </div>
  
}
export default Todoitem;