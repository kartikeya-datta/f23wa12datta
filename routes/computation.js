var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('computation', { title: `Kartikeya's Bonus` });
    router.put( x = Math.round(Math.random()*10));
    router.put( y = Math.round(Math.random()*10));
    router.post(p = Math.pow(x, y));
    router.post(s = Math.sign(x));
    router.post(ta = tanh(x/10));
    router.post(tr = trunc(y));
  res.send(`power applied to ${x} and ${y} is ${p}\n sign applied to ${x} is ${s}\n tanh applied to ${x/10} is ${ta}\n trunc applied to ${y} is ${tr}`)
});

module.exports = router;
let x;
let y;
let p;
let s;
let ta;
let tr;