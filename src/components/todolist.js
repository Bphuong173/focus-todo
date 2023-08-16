import React from 'react'
// nhận vào props todolist từ component Todolist
export default function Todolist({todolist}) {
  return (
  <>
  {
  todolist.map(todo =>  <li key={todo.id}>{todo.name} 
    <button>Delete</button>
    <button>Update</button>
    </li> )
}
  </>
  )
}
