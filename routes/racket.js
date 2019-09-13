const experss = require('express');
const router = express().router;

router.post('/string/new', (req, res) => {
    console.log(req.body);
    res.end();
})

module.exports = router;