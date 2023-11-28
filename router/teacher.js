const express = require('express');
const router = express.Router()
const usercontroller = require('../controllers/guru')


router.get('/getteacher', usercontroller.index)
router.get('/getteacherid/:id', usercontroller.show)
router.post('/addteacher', usercontroller.store)
router.put('/updateteacher/:id', usercontroller.update )
router.delete('/deleteteacher/:id', usercontroller.delete)

module.exports = router