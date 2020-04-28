const router = require('express').Router();
const path = require('path');

//HTML GET Routes
router.get('/exercise', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;
