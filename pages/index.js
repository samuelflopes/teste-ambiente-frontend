const express = require("express");

const server = express();

server.use(express.json());

const CadastroUsuario = ['Nome','telefone','cpf','cep','logradouro','cidadeestado'];

//retorna um dado o cadastro do usuário
server.get('/CadastroUsuario/:index',(req, res,)=> {
    const{index} = req.params;

    return res.json(CadastroUsuario[index]);

});

//retorna todos os dados do usuário
server.get('/CadastroUsuario/',(req, res)=>{
    return res.json(CadastroUsuario);
});

//Adicionar um novo dado/nova informação
server.post('/CadastroUsuario/',(req, res)=> {
    const { name } = req.body;
    CadastroUsuario.push(name);

    return res.json(CadastroUsuario);
});

//Atualizar um curso
server.put('/CadastroUsuario/>:index',(req, res)=>{
    const { index } = req.params;
    const { name } = req.body;
    
    CadastroUsuario[index] = name;

    return res.json(CadastroUsuario);

});

//Deletar um dado
server.delete('/CadastroUsuario/:index', (req, res)=>{
    const { index } = req.params;
    
    CadastroUsuario.splice(index, 1);
    return res.json({ message:" O dado"+'name'+"foi deletado com sucesso "});
})

//servidor host
server.listen(3000);