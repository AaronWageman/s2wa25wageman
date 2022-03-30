var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    //num = Math.floor(Math.random() * 20);
    //result = Math.exp(num); 
    res.render('computation', {title: 'Aarons Wagemans Computation'});
});

module.exports = router;
