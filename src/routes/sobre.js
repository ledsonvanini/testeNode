
const express = require('express')
const path = require('path')
const router = express.Router()

router.get("/sobre", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../views/about.html"));
});


module.exports = router ;