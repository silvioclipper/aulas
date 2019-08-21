const Dev = require('../models/Dev')

module.exports = {
    async store( req, res) {
        const { devId } = req.params
        const { user } = req.headers

        const loggerDev = await Dev.findById(user)
        const targetDev = await Dev.findById(devId) 

        if (!targetDev)
            return res.status(400).json({error: 'Dev não existe.'})


        
        loggerDev.likes.push(targetDev._id)

        

        await loggerDev.save()
        if (targetDev.likes.includes(loggerDev._id))
            console.log("DEU MATCH")

        return res.json({loggerDev})
    }
}