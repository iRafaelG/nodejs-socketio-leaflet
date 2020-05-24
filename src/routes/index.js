// imports
const { Router } = require('express');

// initializations
const router = Router();

// routes
router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;
