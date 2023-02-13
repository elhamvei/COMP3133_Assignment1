const Employee = require("../../models/EmployeeModel")
const User = require("../../models/UserModel")

module.exports = {
    employees: async () => {
        try {
            const employeesFetched = await Employee.find()
            return employeesFetched.map(employee => {
                return {
                    ...employee._doc,
                    _id: employee.id,
                    createdAt: new Date(employee._doc.createdAt).toISOString(),
                }
            })
        } catch (error) {
            throw error
        }
    },

    createEmployee: async args => {
        try {
            const { first_name, last_name, email, gender, salary } = args.employee
            const employee = new Employee({
                first_name,
                last_name,
                email,
                gender,
                salary
            })
            const newEmployee = await employee.save()
            return { ...newEmployee._doc, _id: newEmployee.id }
        } catch (error) {
            throw error
        }
    },
    users: async () => {
        try {
            const usersFetched = await user.find()
            return usersFetched.map(user => {
                return {
                    ...user._doc,
                    _id: user.id,
                    createdAt: new Date(user._doc.createdAt).toISOString(),
                }
            })
        } catch (error) {
            throw error
        }
    },

    createUser: async args => {
        try {
            const { username, email, password } = args.user
            const user = new User({
                username,
                email,
                password,
            })
            const newUser = await user.save()
            return { ...newUser._doc, _id: newUser.id }
        } catch (error) {
            throw error
        }
    },
}