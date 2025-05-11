const express = require('express')
const aiController=require('../controller/ai.controller.js')
const aiService=require('../../services/ai.service.js')
const router =express.Router();

router.post('/get-review',aiController.getReview)
router.post('/get-music-playlist',aiController.getPlaylist)

module.exports=router