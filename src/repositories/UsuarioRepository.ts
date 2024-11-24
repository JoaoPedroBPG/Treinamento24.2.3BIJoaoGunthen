import Usuario from "../models/UsuarioModels";


type UsuarioSemSenha = Omit<Usuario, 'senha'>;

interface AddUsuarioRequest{
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    cpf: string;
    dataDeNascimento: string;
    id: string;
}

interface UpdateUsuarioRequest{
    id: string;

    data: {
        nome: string;
        email: string;
        senha: string;
        telefone: string;
        cpf: string;
        dataDeNascimento: string;
    }
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

    
    public getAll(): UsuarioSemSenha[]{
            return this.usuario.map (({ senha, ...usuarioSemSenha}) => usuarioSemSenha);
    }   

    public getById(id: string): UsuarioSemSenha | undefined{
        const usuario = this.usuario.find((usuario: Usuario) => usuario.id === id);

        if (usuario) {
            const { senha, ...usuarioSemSenha } = usuario; 
            return usuarioSemSenha; 
        }

    }

    public update(data: UpdateUsuarioRequest): Usuario | undefined {
        const usuarioIndex = this.usuario.findIndex(usuario => usuario.id === data.id);

        if (usuarioIndex === -1) {
            return undefined;
        }

        const usuarioExistente = this.usuario[usuarioIndex];
        this.usuario[usuarioIndex] = { ...usuarioExistente, ...data.data };

        return this.usuario[usuarioIndex];
    }

    public findIndex(id: string): number {
        return this.usuario.findIndex((usuario: Usuario) => usuario.id === id);
    }

    public delete(index: number) {
        this.usuario.splice(index, 1);
    }
}


export default UsuarioRepository;   
