const redis = require('redis');

let client = async () => {
    //Inicializar a conexão em localhost:6379
    const client = await redis.createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

    console.log(await client.ping());
    return client;
}

module.exports = client;