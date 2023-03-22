import React,{useState} from 'react'
import Todoitem from './Todoitem'
import styles from "./todo.module.css"
import Todolist from './Todolist'
const Todo = () => {

  const [newtodo,settodo]=useState("")
     const[todos,settodos]=useState([])
     console.log(todos)
     const handlechange=(e)=>{
         settodo(e.target.value)
     }
     const ondelete=(id)=>{
         let newtodos=todos.filter((todo)=>todo.id!==id)
        // console.log()
        settodos(newtodos)
     }

     const setiscomp=(id,newdata)=>{
      let a= todos.map(el=>el.id==id?{...el,status:newdata}:el)
      settodos(a)
     }

  return (
    <div className={styles.main}>
        <div className={styles.top}>
       <input className={styles.input} value={newtodo} placeholder="Write Something" onChange={handlechange}/>
       <button className={styles.button} onClick={()=>{
     settodos([...todos,
        {id:Date.now() ,value:newtodo ,status:false }
    
    ])
    settodo("")
       }}>add</button>
    </div>
       <br />
       <br /> 
       <p>Incompleted Tasks</p> 
       <Todolist todos={todos.filter((data)=>!data.status)} setiscomp={setiscomp} ondelete={ondelete}/>
       <p>completed  Tasks</p> 
       <Todolist todos={todos.filter((data)=>data.status)} setiscomp={setiscomp} ondelete={ondelete}/>
    </div>
  )
}

export default Todo