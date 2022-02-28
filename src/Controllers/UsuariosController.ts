import { Request, Response } from 'express';
import connection from '../database/db';

export  const listaUsuario = async (req: Request, res: Response) => {
    let cpf = req.params.id;
    

    const usuarios = await connection('usuarios').select('*').where({cpf:cpf});

    return res.status(200).json(usuarios);
}

export  const listaUsuarios = async (req: Request, res: Response) => {

    const usuarios = await connection('usuarios').select('*');

    return res.status(200).json(usuarios);
}

export  const insereUsuario = async (req: Request, res: Response) => {
    const {
        nome,
        telefone,
        cpf,
        cep,
        logradouro,
        cidade,
        estado
    } = req.body;
    const trx = await  connection.transaction()
    
    const teste = await trx('usuarios').insert({
        nome,
        telefone,
        cpf,
        cep,
        logradouro,
        cidade,
        estado
    });
    await trx.commit();
    return res.status(200).json({message: "Usuário inserido com sucesso!!!"}).send();
}

export  const editaUsuario = async (req: Request, res: Response) => {
    const {
        nome,
        telefone,
        cpf,
        cep,
        logradouro,
        cidade,
        estado
    } = req.body;
    const id = req.params.id;
    const trx = await  connection.transaction()
    
    const teste = await trx('usuarios').update({
        nome,
        telefone,
        cpf,
        cep,
        logradouro,
        cidade,
        estado
    }).where({cpf:id});
    await trx.commit();

    return res.status(200).json({message: "Usuário atualizado com sucesso!!!"}).send();
}

export const deletaUsuario = async (req: Request, res: Response) => {

    const id = req.params.id;
    await connection('usuarios').where({cpf:id}).del();

    return res.status(204).send();
}
