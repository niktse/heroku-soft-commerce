const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


router.get('/', (req, res, next) => {
    User.find()
        .select('_id username password ')
        .exec()
        .then(docs=>{
            res.json({
                count : docs.length,
                users: docs.map(doc=>{
                    return {
                        _id: doc._id,
                        username:doc.username,
                        password:doc.password,
                        request:{
                            type:'GET',
                            url:'http://localhost:3000/users/' +doc._id,
                        }

                    }
                })

            });
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })




    });

router.post('/signup', async (req, res, next) => {
    try{
        const   encryption = bcrypt.hashSync(req.body.password,10);
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username:req.body.username,
            password: encryption
        });
        const result = await user.save();
        res.send(result);
    }catch (error){
        res.status(500).json({
            message:'something went wrong',
            error:error
        })
    }
})

router.post('/login',async (req,res)=>{
    try {
        const user = await User.findOne({ username: req.body.username }).exec();
        if(!user) {
            return res.status(400).send({ message: "The username does not exist" });
        }
        if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send({ message: "The password is invalid" });
        }
        res.send({ message: "The username and password combination is correct!" });
        res.json(user)
    } catch (error) {
        res.status(500).send(error);
    }
})








module.exports = router;