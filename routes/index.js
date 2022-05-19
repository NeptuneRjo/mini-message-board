const express = require('express')
const router = express.Router()

// sample messages
const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
]

/* GET the home page */
router.get('/', (req, res) => {
	res.render('index')
})

module.exports = router
