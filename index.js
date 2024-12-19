// import json server
const jsonServer = require('json-server')

// ceraete json server app
const server=jsonServer.create()

// use roputer for db.json
const router= jsonServer.router('db.json')

// create middleware
const middleware=jsonServer.defaults()

// create port number
const port=process.env.PORT || 3000

// USE ROUTER AND MIDDLEWARE
server.use(middleware)
server.use(router)

// run server
server.listen(port,()=>{
    console.log(`Contact server start at ${port}`);
    
})