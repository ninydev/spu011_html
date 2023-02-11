const mongoose = require('mongoose')

exports.connect = () => {
    console.log (process.env.MONGODB_URI)
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then( () => {
            console.log('Connect to mongodb ok')
        })
        .catch( (err) => {
            console.log('db connect err')
            console.log(err)
            process.exit(500)
        })
}