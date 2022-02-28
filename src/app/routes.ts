import express from 'express';
const usuariosController = require("../Controllers/UsuariosController");

export const router = express.Router();




router.get('/lista_usuarios', usuariosController.listaUsuarios);
router.get('/recupera_usuario/:id', usuariosController.listaUsuario);
router.post('/insere_usuario/', usuariosController.insereUsuario);
router.put('/edita_usuario/:id', usuariosController.editaUsuario);
router.delete('/deleta_usuario/:id', usuariosController.deletaUsuario);
