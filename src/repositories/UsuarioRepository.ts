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

    public add ({ nome, email, senha, telefone, cpf, dataDeNascimento}: AddUsuarioRequest) {
        const usuario = new Usuario({ nome, email, senha, telefone, cpf, dataDeNascimento}); 
        console.log(this.usuario.length);  
        this.usuario.push(usuario);
        console.log(usuario);
        console.log(this.usuario.length);  
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
    public getAll(): Usuario[]{
            return this.usuario;
    }   

    public getById(id: string): Usuario | undefined{
        return this.usuario.find((usuario: Usuario) => usuario.id === id);

    }

}


export default UsuarioRepository;   
