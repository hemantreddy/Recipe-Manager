const express = require('express'); 
const router = express.Router(); 
const Todo = require('../models/todo')

router.get('/', (req, res) => {
    Todo.find((err, result) => {
        if (err) {
            res.status(500).json({
                error: err
            });
        } else {
            res.status(200).json(result);
        }
    });
});

module.exports = router; 