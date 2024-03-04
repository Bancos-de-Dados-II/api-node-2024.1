const express = require('express');
const usuarioRouter = express.Router();

const {listarUsuarios, buscarUsuario, criarUsuario, deletarUsuario} = 
    require('../controller/UsuarioController');

usuarioRouter.get('/', listarUsuarios);
usuarioRouter.get('/:email', buscarUsuario);
usuarioRouter.post('/', criarUsuario);
usuarioRouter.delete('/:email', deletarUsuario)

module.exports = usuarioRouter;