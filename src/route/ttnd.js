import express from 'express';

import { getttnd, editttnd,postavatar } from '../controller/homeController.js'
const router = express.Router();
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/avatar')
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })







router.get('/', getttnd)
router.post('/edit', editttnd)
router.post('/postavatar',upload.single('avatar'), postavatar)






module.exports = router