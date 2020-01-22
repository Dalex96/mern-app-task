const express = require('express')
const router = express.Router()

const Task = require('../models/task')


//All list
router.get('/', async (req, resp) => {

	const tasks = await Task.find()
	resp.json(tasks)

	/*Task.find().then(data => {
		console.log(data)
	}).catch(err => {
		console.log(err)
	})

	Task.find((err, task) => {
		console.log(task)
		resp.json({
			status: '200',
			message: 'Todo OK'
		})
	})*/

})

//One list
router.get('/:id', async (req, resp) => {

	const task = await Task.findById(req.params.id)
	resp.json(task)

})

// Create
router.post('/', async (req, resp) => {

	const {title, message} = req.body
	const newTask = new Task({title, message})
	await newTask.save()
	resp.json({
		status: '201',
		message: 'Task Saved'
	})

})

// Update
router.put('/:id', async (req, resp) => {

	const {title, message} = req.body
	const updateTask = {title, message}
	await Task.findByIdAndUpdate(req.params.id, updateTask)
	resp.json({
		status: '300',
		message: 'Task Updated'
	})

})

// Delete
router.delete('/:id', async (req, resp) => {
	await Task.findByIdAndRemove(req.params.id)
	resp.json({
		status: '200',
		message: 'Task Dalete'
	})

})



module.exports = router