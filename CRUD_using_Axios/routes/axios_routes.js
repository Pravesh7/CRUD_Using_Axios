const express=require('express');
const router=express.Router();

const controller= require('../controller/axios_controller');

router.get('/',controller.axios_get);
router.post('/',controller.axios_post);
router.put('/:id',controller.axios_put);
router.delete('/:id',controller.axios_delete);

module.exports=router;