const express = require('express');

const Projects = require('./data/helpers/projectModel')

const projectRouter = require ('./routers/projectRouter')

const server = express()
server.use(express.json())

server.use("/api/projects", projectRouter)

server.get('/', (req,res) => {
    res.send(`<h2>API Sprint Challenge</h2>`)
})

module.exports = server;