var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // Generate the content you want to send as a response
    const x = Math.round(Math.random() * 10);
    const y = Math.round(Math.random() * 10);
    const z = Math.round(Math.random());
    const p = Math.pow(x, y);
    const s = Math.sign(x);
    const ta = Math.tanh(z);
    const tr = Math.trunc(y);

    const responseText = `power applied to ${x} and ${y} is ${p}\n sign applied to ${x} is ${s}\n tanh applied to ${z} is ${ta}\n trunc applied to ${y} is ${tr}`;

    // Send the response to the client
    res.render('computation', { title1: 'My Math functions', result: responseText });
});


module.exports = router;