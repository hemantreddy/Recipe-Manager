const express = require('express'); 
const router = express.Router(); 
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const User = require('../models/User'); 


router.post('/signup', (req, res, next) => {
    User.find({email : req.body.email})
        .exec()
        .then(user => {
            if(user.length >= 1){
                return res.status(409).json({
                    message : 'user already exists'
                });
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err) {
                        res.status(500).json({
                            error : err
                        })
                    } 
                    else {
                        const user = new User({
                            name : req.body.name,
                            email : req.body.email,
                            password : hash
                        });
                        user.save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message : "User registration Successful"
                                });
                            });
                    }
                })
            }
        });
});

router.post('/login', (req, res, next) => {
    User.find({email:req.body.email})
        .exec()
        .then(user => {
            if(user.length < 1){
                res.status(401).json({
                    message : "Authentication failed"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if(err) {
                    return res.status(401).json({
                        message : 'Authentication Failed'
                    });
                }
                if(result){
                    const token = jwt.sign({
                        email : user[0].email,
                        userId : user[0].userId
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn : "1h"
                    }); 
                return res.status(200).json({
                    message : "Authentication Successful",
                    token : token
                })
                }
            })
        })
        .catch(err => {
            res.status(401).json({
                message : 'Authentication Failed'
            })
        })
});

router.delete('/:userId', (req, res, next) => {
    User.remove({_id : req.params.userId})
        .then(result => {
            console.log(result);
            res.status(200).json('user deletion successful'); 
        })
        .catch(err => {
            if(err) {
                res.status(500).json({err : err})
            }
        })
})

module.exports = router; 


