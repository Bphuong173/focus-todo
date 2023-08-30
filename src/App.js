import React from 'react'
import Todo from './Todo'
import TodoLabel from './TodoLabel'
export default function App() {
  return (<>
  <div className="AllTodo">
    <div className="TodoList"> <Todo /></div>
    <div className="TodoLabelList"> <TodoLabel /></div>
  </div>
  </>
   
  )
}
