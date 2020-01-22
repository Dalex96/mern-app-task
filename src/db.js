const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/animals'

mongoose.connect(URI)
	.then(db => console.log('DB is connect'))
	.catch(err => console.log('Error en conectad DB'))

module.exports = mongoose