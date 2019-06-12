const express = require('express');
const router = express.Router(); 
const Recipe = require('../models/Recipe');

const checkAuth = require('../middleware/checkAuth')

router.get('/', (req, res, next) => {
    Recipe.find()
        .exec()
        .then(result => {
            res.status(200).json({
                message : 'List of recipes',
                result : result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message : "unable to fetch recipes"
            })
        });
});

router.post('/add', checkAuth, (req, res, next) => {
    const recipe = new Recipe({
        title : req.body.title, 
        instructions: req.body.instructions,
        ingredients: req.body.ingredients,
        notes: req.body.notes
    })
    recipe.save()
        .then(result => {
            res.status(200).json({
                message : 'recipe added successfully',
                result
            });
        })
        .catch(err => {
            res.status(500).json({
                message : "unable to add recipe",
                err
            });
        });
});

router.patch('/:recipeId', checkAuth, (req, res, next) => {
    const id = req.params.recipeId
    const updateObject = req.body
    Recipe.update({_id : id}, {$set : updateObject})
        .exec()
        .then(result => {
            res.status(200).json({
                message : 'recipe updated',
                result
            });
        });
});

router.delete('/:recipeId', checkAuth, (req, res, next) => {
    Recipe.remove({_id : req.params.recipeId})
        .exec()
        .then(result => {
            res.status(200).json({
                message : 'product deleted',
                result
            });
        })
        .catch(err => {
            res.status(500).json({
                message : 'unable to delete recipe',
                err
            })
        })
});

module.exports = router;