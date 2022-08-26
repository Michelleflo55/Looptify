const Router = require('express').Router()
const AppointmentRouter = require('./AppointmentRouter')

Router.use('/', AppointmentRouter)

module.exports = Router