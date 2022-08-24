const Router = require('express').Router()
const controller = require('../controllers/AppointmentController')

Router.get('/', controller.GetAppointments)
Router.get('/:id', controller.GetAppointment)
// Router.post('/newAppointment', controller.PostAppointment)

module.exports = Router