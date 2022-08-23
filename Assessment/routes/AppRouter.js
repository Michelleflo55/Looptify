const Router = require('express').Router()
const AppointmentRouter = require('./AppointmentRouter')

Router.use('/appointments', AppointmentRouter)

module.exports = Router