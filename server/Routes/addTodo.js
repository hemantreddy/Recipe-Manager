const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');  


router.post('/', (req, res) => {
    let todo = new Todo({
        todo_description: req.body.todo_description,
        todo_responsible: req.body.todo_responsible,
        todo_priority: req.body.todo_completed,
        todo_completed: req.body.todo_priority
    });
    todo.save()
        .then(todo => {
            res.status(200).json({
                todo: 'todo added successfully'
            })
        });
});

module.exports = router;
