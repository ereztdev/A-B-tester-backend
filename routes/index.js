var express = require('express');
var app = express();
var router = express.Router();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
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
