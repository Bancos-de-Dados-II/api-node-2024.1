const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

const usuarioRouter = require('./routers/UsuarioRouter');
app.use('/usuarios', usuarioRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});