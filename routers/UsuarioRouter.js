const express = require('express');
const usuarioRouter = express.Router();

const {listarUsuarios, buscarUsuario, criarUsuario} = 
    require('../controller/UsuarioController');

usuarioRouter.get('/', listarUsuarios);
usuarioRouter.get('/:email', buscarUsuario);
usuarioRouter.post('/', criarUsuario);

module.exports = usuarioRouter;