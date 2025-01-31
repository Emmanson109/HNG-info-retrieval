const router = require('express').Router()
const controller = require('../controllers/userController');

router.post('/', controller.userInformation);
router.get('/info', controller.retrieveInfo)


module.exports = router;