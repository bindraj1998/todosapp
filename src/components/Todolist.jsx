import React from 'react'
import Todoitem from './Todoitem'

const Todolist = ({todos,setiscomp,ondelete}) => {
  return (
    <div>
        {todos.map((todo)=>(

<Todoitem todo={todo} key={todo.id} ondelete={ondelete} setiscomp={setiscomp}/> 
))}
    </div>
  )
}

export default Todolist