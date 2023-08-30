// import thư viện useState để sử dụng từ react
import { useState } from "react";
import {useEffect} from "react"
// import Todolist from "./components/todolist";
// import UUID V4 để sử dụng từ UUID
import {v4} from "uuid"
function Todo() {
  // sử dụng react hook useState để lấy value đã lưu trong todoList và set giá trị mới cho nó
  const [todoList, setTodolist] = useState([])
  // sử dụng react hook useState đê lấy value người dùng nhập từ thẻ input
  const [textInput, setTextInput] = useState("")
  // id của todo hiện tại
  const [updateTodo, setUpdateTodo] = useState(null)
  // value từ thẻ input mới sau khi nhấn button update
  const [updateTodoInput, setUpdateTodoInput] = useState("")
  // sử dụng useEffect để render dữ liệu trên DOM
  //get method
  useEffect(() => {
    const url = "http://localhost:5500/todo"
   fetch(url,)
   .then((response) => response.json())
   .then((json) => {
    setTodolist(json)
   })
   .catch((error) => console.log(error))
   },[])
  // giá trị mà người dùng vừa nhập nhập vào thẻ input
  const TextInputChange = (e) => {
    setTextInput(e.target.value)
  }
  const AddBtnClick = () => {
    fetch("http://localhost:5500/todo", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({name: textInput,
      })
  })
.then(response => response.json())
    setTodolist([ {id : v4(), name : textInput}, ...todoList])
    setTextInput("")

  }
  const deleteTodoList = (id) => {
    const newTodoList = todoList.filter((newTodo) => {
      if (newTodo.id === id){
        return false
      }else {
        return true
        }
      }
    )
    setTodolist(newTodoList)
  }
  const saveTodo = (id) => {
    const updatedTodo = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.name = updateTodoInput
      }
      return todo

    })
    setTodolist(updatedTodo)
    setUpdateTodo(null)
    setUpdateTodoInput("")
  }
  return (
    <>
    <h2 className="TodoH2"
    >Todo </h2>
    <div className="inputTodo">
      <input type="text" placeholder="" value = {textInput} onChange={TextInputChange}></input>
      <button onClick={AddBtnClick}>Add Item</button>
    </div>
    <div className="Todo">
    {todoList.map(todo => <li key={todo.id}>
      {/* xét todo có cùng id không */}
      {updateTodo === todo.id ?
        (<input type="text" value={updateTodoInput} onChange={(e)=> setUpdateTodoInput(e.target.value)} />): (todo.name)}
      {updateTodo === todo.id ? (<button onClick={() =>saveTodo(todo.id)}>Save</button>):
        (<button onClick={() =>setUpdateTodo(todo.id)}>Update</button>)}
        {updateTodo === todo.id ? (null):(<button onClick={() =>deleteTodoList(todo.id)}>Delete</button>)}
         </li> )
      }
    </div>
     
    </>
  )
};
export default Todo;
