const express = require('express')
const router = express.Router()
router.use(express.json())

const Projects = require('../data/helpers/projectModel')
// const { json } = require('express')



router.post('/', (req, res) => {
    const newProject = req.body
    Projects.insert(newProject)
    .then(value => {
        res.status(201).json(value)
    })
    .catch(error => {
        res.status(500).json({ error: "There was an error posting the Project."})
    })
})

// router.post('/:id/', (req, res) => {
//     const {id} = req.params
//     const newAction = req.body
//     Projects.get(id)
//     .then(value => {
//         Projects.insert(newAction)
//         res.status(201).json(value)
//     })
//     .catch(error => {
//         res.status(500).json({error: "There was an error posting the Action."})
//     })
// })

router.get('/', (req,res) => {
    Projects.get()
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error retrieving the Projects."})
    })
})

router.get('/:id', (req,res) => {
    const {id} = req.params
    Projects.get(id)
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error retrieving that Project."})
    })
})

// router.get('/:id/', (req,res) => {
//     const {id} = req.params
//     Projects.getProjectActions(id)
//     .then(value => {
//         res.status(200).json(value)
//     })
//     .catch(error => {
//         res.status(500).json({error: "There was an error retrieving the Project's Actions."})
//     })
// })

router.delete('/:id', (req, res) => {
    const {id} = req.params
    Projects.remove(id)
    .then(value => {
        if(value > 0) {
            res.status(200).json({message: "The Project has been removed."})
        }
    })
    .catch(error => {
        res.status(500).json({ error: "There was an error removing the Project."})
    })
})

router.put('/:id', (req, res) => {
    let changes = req.body
    const {id} = req.params
    Projects.update(id, changes)
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({ error: "There was an error updating the Project."})
    })
})

module.exports = router;