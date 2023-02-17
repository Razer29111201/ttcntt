import express from 'express';

import { gt, gtdetail } from '../controller/homeController.js'
const router = express.Router();


router.get('/', gt)
router.get('/:role', gtdetail)





module.exports = router