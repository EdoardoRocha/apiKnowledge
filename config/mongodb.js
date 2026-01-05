const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Mongo conectado!"))
    .catch(e => {
        const msg = '[ERROR] Não foi possível com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })