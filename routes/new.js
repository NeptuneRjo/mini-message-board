var express = require('express')
var router = express.Router()

/* GET new message page. */
router.get('/', (req, res) => {
	res.render('new', { title: 'New message' })
})

module.exports = router
