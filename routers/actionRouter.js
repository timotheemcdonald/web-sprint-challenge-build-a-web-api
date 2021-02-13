const express = require('express')
const router = express.Router()

const Projects = require('../data/helpers/projectModel')
const Actions = require('../data/helpers/actionModel')

router.post('/', (req, res) => {
    const {id} = req.params
    const newAction = req.body
    Actions.insert(newAction)
    .then(value => {
        res.status(201).json(value)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error posting the Action."})
    })
})

router.get('/:id', (req,res) => {
    const {id} = req.params
    Actions.get(id)
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error retrieving the Project's Actions."})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    Actions.remove(id)
    .then(value => {
        if(value > 0) {
            res.status(200).json({message: "The Action has been removed."})
        }
    })
    .catch(error => {
        res.status(500).json({ error: "There was an error removing the Action."})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    let changes = req.body
    Actions.update(id, changes)
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error updating the Action."})
    })
})

module.exports = router;