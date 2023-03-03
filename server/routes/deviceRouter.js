const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/search', deviceController.search)
router.get('/:id', deviceController.getOne)
router.delete('/:id', deviceController.delete)
router.put('/:id', deviceController.update)

module.exports = router