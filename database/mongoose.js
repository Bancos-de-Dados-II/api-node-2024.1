require('dotenv').config();
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Conectado com o MongoDB');
}

module.exports = mongoose;