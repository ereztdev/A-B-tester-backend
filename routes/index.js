var express = require('express');
var app = express();
var router = express.Router();

router.get('/api/', function(req, res, next) {
  setTimeout((function() { res.send(
      {
        success:true,
        message:`You have successfully added another test to my database.`,
        link: `https://www.youtube.com/watch?v=YoWom0CCRKM&feature=youtu.be&t=5`
      })
  }), 2000);
});

module.exports = router;
