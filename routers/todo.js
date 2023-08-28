import express from 'express';
 const router = express.Router();

import {  createTasks,getAllTasks, getSingleTasks, updateTasks, deleteTasks } from "../controllers/todo.js"
 router.get('/',getAllTasks )
 router.post('/', createTasks);
 router.get('/:id',getSingleTasks )
 router.put('/:id',updateTasks )
 router.delete('/:id',deleteTasks );

 export default router;