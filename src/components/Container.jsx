import React from 'react'
import Todoitem from './Todoitem'

const Container = ({Todoitems,Deletion}) => {
  
  return <div>
    {Todoitems.map((item,index) => 
    <Todoitem deleteditem={Deletion} key={index} TodoName={item.name} Tododate={item.date} ></Todoitem>)}
    
    </div>

}

export default Container