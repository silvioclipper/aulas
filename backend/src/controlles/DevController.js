module.exports = {
    store(req, res)  {
        console.log('devs')
        return res.json({ok:true})
    }
}