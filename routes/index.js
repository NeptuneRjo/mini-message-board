var express = require('express')
var router = express.Router()

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

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express', messages })
})

router.post('/new', (req, res) => {
	messages.push({
		title: req.body.messageText,
		user: req.body.messageUser,
		added: new Date(),
	})
})

module.exports = router
