// import thư viện useState để sử dụng từ react
import { useState } from "react";
import {useEffect} from "react"
import Todolist from "./components/todolist";
// import UUID V4 để sử dụng từ UUID
import {v4} from "uuid"
function App() {
  // sử dụng react hook useState để lấy value đã lưu trong todoList và set giá trị mới cho nó
  const [todoList, setTodolist] = useState([])
  // sử dụng react hook useState đê lấy value người dùng nhập từ thẻ input
  const [textInput, setTextInput] = useState("")
  // sử dụng useEffect để render dữ liệu trên DOM
  //get method
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users"
   fetch(url)
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
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: textInput,
        id: v4()
      })
  })
.then(response => response.json())
    setTodolist([ {id : v4(), name : textInput}, ...todoList])
    setTextInput("")
  }
  
  return (
    <>
    <h2>Todo App</h2>
    <div>Add an Item ...</div>
    <div>
      <input type="text" placeholder="Type item here" value = {textInput} onChange={TextInputChange}></input>
      <button onClick={AddBtnClick}>Add Item</button>
    </div>
    <ul>
        {/* truyền cho component Todolist props là todolist có giá trị là state todoList ở trên  */}
    <Todolist  todolist={todoList}/>
    </ul>
    </>
  )
};
export default App;
