import { Request, Response } from 'express'

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let todoList = ['put on sock', 'put on shoe', 'tie laces']

// redirects to /todos/
app.get('/', (req: Request, res: Response) => {
    res.redirect(301, '/todos/')
});

// returns a list in format ['x', 'y', 'z']
app.get('/todos/', (req: any, res: any) => { // /todo automatically redirects to /todos/
    res.send(todoList)
});

// fetches a todo item
app.get('/todos/:id', (req: Request, res: Response) => {
    const todo_id = parseInt(req.params.id)
    if ( !(todo_id in todoList) ) {
        res.status(404).send("No todo item with that id found")
    } 
    const response = {'title': todoList[todo_id], 'idx': todo_id}
    res.send(response)
});


// Overwrite the item at the index with the contents of the request body.title
app.put('/todos/:id', (req: Request, res: Response) => {
    const todoId = parseInt(req.params.id)
    const todoText = req.body.title
    if ( !(todoId in todoList) ) {
        res.status(404).send("No todo item with that id found")
    }
    todoList[todoId] = todoText
    if (todoList[todoId] != todoText) {
        res.status(500).send("Something went wrong with the update")
    }
    res.status(200).send(`Succesfully updated todo item ${todoId} to ${todoText}`)
});

// Remove a todo item
app.delete('/todos/:id', (req: Request, res: Response) => {
    const todoId = parseInt(req.params.id)
    if ( !(todoId in todoList) ) {
        res.status(404).send("No todo item with that id found")
    }
    const todoText = todoList[todoId]
    todoList.splice(todoId, 1)
    if (todoList[todoId] == todoText) {
        res.status(500).send("Something went wrong with the update")
    }
    res.status(200).send(`Received a DELETE request. Removed item ${todoId}`)
});

// Add a todo item
app.post('/todos/', (req: Request, res: Response) => {
    const todoText = req.body.title
    todoList.push(todoText)
    if ( todoList[todoList.length-1] != todoText) {
        res.status(500).send("Could not add todo item")
    }
    res.status(200).send(`Added '${todoText}' to todo list`)
});

// start app
app.listen(port, () => {
    console.log(`Example express app listening at http://localhost:${port}`)
});