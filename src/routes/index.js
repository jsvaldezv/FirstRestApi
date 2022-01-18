const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Jesus",
        "website": "earcandytech.com"
    };
    res.json(data);
});

module.exports = router;