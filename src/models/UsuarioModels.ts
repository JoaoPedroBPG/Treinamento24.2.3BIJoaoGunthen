import { v4 as uuid } from "uuid";

interface Request{
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    cpf: string;
    dataDeNascimento: string;
}


class Usuario {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    cpf: string;
    dataDeNascimento: string;
    id: string;

    constructor(data: Request){
        this.nome = data.nome;
        this.email = data.email;
        this.senha = data.senha;
        this.telefone = data.telefone;
        this.cpf = data.cpf;
        this.dataDeNascimento = data.dataDeNascimento;
        this.id = uuid();
    }

}

export default Usuario;

