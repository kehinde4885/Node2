const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('kjfkjfl');
});

router.get('/cool', (req, res) => {
  console.log('djd')
  res.send('You"re so cool');
})


module.exports = router;
