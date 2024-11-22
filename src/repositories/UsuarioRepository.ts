import Usuario from "../models/UsuarioModels";




interface AddUsuarioRequest{
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    cpf: string;
    dataDeNascimento: string;
    id: string;
}

class UsuarioRepository {
    private usuario: Usuario[];

    constructor(){
        this.usuario = [];
    }

    public add ({ nome, email, senha, telefone, cpf, dataDeNascimento}: AddUsuarioRequest): Usuario[] {
        const usuario = new Usuario({ nome, email, senha, telefone, cpf, dataDeNascimento});
        this.usuario.push(usuario);
        return this.usuario;    
    }

    public finduserByCpf(cpf: string): Usuario | undefined{
        return this.usuario.find(usuario => usuario.cpf === cpf);
    }

    public finduserByEmail(email: string): Usuario | undefined{
        return this.usuario.find(usuario => usuario.email === email);
    }

    public finduserByTelefone(telefone: string): Usuario | undefined{
        return this.usuario.find(usuario => usuario.telefone === telefone);
    }   

    }

export default UsuarioRepository;   
