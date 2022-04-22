const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController')
const adminProductController = require('../controllers/admin/adminProductController')

router.get('/', adminController.index);
router.get('/agregar', adminProductController.productAdd);
router.get('/listar', adminProductController.list);


module.exports = router;