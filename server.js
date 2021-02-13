const express = require('express');

const Projects = require('./data/helpers/projectModel')
const Actions = require('./data/helpers/actionModel')

const projectRouter = require ('./routers/projectRouter')
const actionRouter = require('./routers/actionRouter')

const server = express()
server.use(express.json())

server.use("/api/projects", projectRouter)
server.use("/api/projects/:id/actions", actionRouter)

server.get('/', (req,res) => {
    res.send(`<h2>API Sprint Challenge</h2>`)
})

module.exports = server;