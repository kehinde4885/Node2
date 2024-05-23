const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/catalog")
});

router.get('/users/:userId/books/:booksId', (req, res) => {
  res.send(req.params)
})

module.exports = router;
