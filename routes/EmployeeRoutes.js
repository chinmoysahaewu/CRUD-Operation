const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')

//api

router.get('/', EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/create', EmployeeController.create)
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)

module.exports = router