import React,{useState} from 'react'
import styles from "./todo.module.css"

const Todoitem = ({todo ,ondelete,setiscomp}) => {


      
  return (
    <div className={styles.flix} key={todo.id}>
<input type="checkbox"
 checked={todo.status}
 onChange={()=>setiscomp(todo.id,!todo.status)}

/>
<div className={todo.status ? styles.s:""} style={{fontSize:20,marginLeft:5}}>{todo.value}</div>
   <button   onClick={()=>ondelete(todo.id)}>DELETE TODO</button>  
    </div>
  )
}

export default Todoitem