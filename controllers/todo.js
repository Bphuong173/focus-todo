import {todomodel} from "../models/todoSchema.js"
export const getAllTasks = async  (req, res) => {
  await todomodel.find({}).then((data) => {
    res.send((JSON.stringify(data)));
  });
  }
  export const createTasks = (req, res) => {
  const newTodomodel = new todomodel({
    work: req.body.work,
    time: req.body.time
    })
    newTodomodel.save();
    res.send(JSON.stringify(newTodomodel));
  }
    
  export const getSingleTasks = async (req, res) => {
    const  {id}  = req.params
    const singleUser = await todomodel.findById(id)
    res.send(JSON.stringify(singleUser));
  };
  export const updateTasks = async (req, res) => {
    const { id } = req.params
    const updateTodo = await todomodel.updateOne(
      {_id: id},
      { $set:{work: req.body.work, time: req.body.time}}
      )
      res.send(JSON.stringify(updateTodo))
  };
  export const deleteTasks = async (req, res) => {
    const { id } = req.params
    const removeTodo = await todomodel.deleteOne({_id: id})
    res.send(JSON.stringify(removeTodo));
  };
  