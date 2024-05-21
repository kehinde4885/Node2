const express = require('express')

const router2 = express.Router()

router2.use(express.static('public'))

module.exports = router2