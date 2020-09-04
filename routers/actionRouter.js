const express = require('express')
const router = express.Router()

const Projects = require('../data/helpers/projectModel')
const Actions = require('../data/helpers/actionModel')

router.post('/', (req, res) => {
    const {id} = req.params
    const newAction = req.body
    Projects.get(id)
    .then(value => {
       Actions.insert(newAction)
        res.status(201).json(value)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error posting the Action."})
    })
})

router.get('/', (req,res) => {
    const {id} = req.params
    Projects.getProjectActions(id)
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error retrieving the Project's Actions."})
    })
})

module.exports = router;