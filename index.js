import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routers/todo.js';
import cors from "cors"
const app = express();
const PORT = 5500;
app.use(cors());
app.use(bodyParser.json());

app.use('/todo', userRoutes)
app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => console.log(`sever listening on port: http://localhost:${PORT}`));