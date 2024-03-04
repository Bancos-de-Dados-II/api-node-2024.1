const express = require('express');
const usuarioRouter = express.Router();

const {listarUsuarios, buscarUsuario, criarUsuario, deletarUsuario, 
    atualizarUsuario} = require('../controller/UsuarioController');

usuarioRouter.get('/', listarUsuarios);
usuarioRouter.get('/:email', buscarUsuario);
usuarioRouter.post('/', criarUsuario);
usuarioRouter.delete('/:email', deletarUsuario);
usuarioRouter.put('/:email', atualizarUsuario);

module.exports = usuarioRouter;