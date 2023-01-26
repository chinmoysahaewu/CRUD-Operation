const Employee = require('../model/EmployeeModel')

const index = (req, res) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}
//read

const show = (req, res) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//create

const create = (req, res) => {
    let employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    })
    employee.save()
    .then(response => {
        res.json({
            message: 'Employee created successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//update

const update = (req, res) => {
    let employeeID = req.body.employeeID

    let updatedData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        //email: req.body.email,
        phone: req.body.phone
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Employee updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })

}

//delete

const destroy = (req, res) => {
    let employeeID = req.body.employeeID

    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        res.json({
            message: 'Employee deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

module.exports = {
    index, show, create, update, destroy
}