import Usuario from "../models/UsuarioModels";
import UsuarioRepository from "../repositories/UsuarioRepository";  

interface AddUsuarioRequest{
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    cpf: string;
    dataDeNascimento: string;
    id: string;
}

class AddUsuarioService {
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository){  
        this.usuarioRepository = usuarioRepository;       
    }

    public execute(data:AddUsuarioRequest ) : Usuario[] {
        const cpfDoUsuario = this.usuarioRepository.finduserByCpf(data.cpf);
        if (cpfDoUsuario){
            throw new Error("CPF já existe");
        }

        const emailDoUsuario = this.usuarioRepository.finduserByEmail(data.email);
        if (emailDoUsuario){
            throw new Error("Email já existe");
        }
        
        const telefoneDoUsuario = this.usuarioRepository.finduserByTelefone(data.telefone);
        if (telefoneDoUsuario){
            throw new Error("Telefone já existe");
        }   
        const usuario = this.usuarioRepository.add(data);

        return usuario;
    } 
    
}
export default AddUsuarioService;  