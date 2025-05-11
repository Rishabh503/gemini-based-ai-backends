const aiService=require("../../services/ai.service.js")

module.exports.getReview=async (req,res)=>{
    const code =req.body.code;
    if(!code) {
        return res.status(400).send("code is requires")
    }

    const response=await aiService(code)

    res.send(response)
}

module.exports.getPlaylist=async(req,res)=>{
    const mood = req.body.mood;
    if(!mood) return res.status(400).send("give us the mood")

    const response=await aiService.generateMusicPlaylist(mood)
    res.send(response)
}