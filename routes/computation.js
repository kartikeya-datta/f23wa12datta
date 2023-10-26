var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    router.put( x = Math.round(Math.random()*10));
    router.put( y = Math.round(Math.random()*10));
    router.put( z = Math.round(Math.random()));
    router.post(p = Math.pow(x, y));
    router.post(s = Math.sign(x));
    router.post(ta = Math.tanh(z));
    router.post(tr = Math.trunc(y));
  res.send(`power applied to ${x} and ${y} is ${p}\n sign applied to ${x} is ${s}\n tanh applied to ${z} is ${ta}\n trunc applied to ${y} is ${tr}`)
});

module.exports = router;
let x;
let y;
let z;
let p;
let s;
let ta;
let tr;