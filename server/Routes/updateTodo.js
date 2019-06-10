const express = require('express');
const router = express.Router(); 
const Todo = require('../models/todo');

router.post('/:id', (req, res) => {
    const id = req.params.id;
    const updateObject = req.body;
        Todo.update({_id: id}, 
            {
                set: updateObject
            })
            .then(result => {
                console.log(result);
                res.status(200).json('todo updated');
            })
        })

module.exports = router; 