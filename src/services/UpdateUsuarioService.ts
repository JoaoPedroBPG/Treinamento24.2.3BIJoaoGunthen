import UsuarioRepository from "../repositories/UsuarioRepository";

interface UpdateUsuarioRequest {
    id: string;
    data: {
        nome: string;
        email: string;
        telefone: string;
        senha: string;
        cpf: string;
        dataDeNascimento: string;
    };
}

class UpdateUsuarioService {
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public execute( data: UpdateUsuarioRequest) {

        const usuarioExistente = this.usuarioRepository.getById(data.id);

        if (!usuarioExistente) {
            throw new Error("Usuário não encontrado");
        }

        
        const cpfDoUsuario = this.usuarioRepository.finduserByCpf(data.data.cpf);
        if (cpfDoUsuario && cpfDoUsuario.id !== data.id) {
            throw new Error("CPF já existe");
        }

        const emailDoUsuario = this.usuarioRepository.finduserByEmail(data.data.email);
        if (emailDoUsuario && emailDoUsuario.id !== data.id) {
            throw new Error("Email já existe");
        }

        const telefoneDoUsuario = this.usuarioRepository.finduserByTelefone(data.data.telefone);
        if (telefoneDoUsuario && telefoneDoUsuario.id !== data.id) {
            throw new Error("Telefone já existe");
        }

        const usuarioAtualizado = this.usuarioRepository.update(data);

        if (!usuarioAtualizado) {
            throw new Error("Erro ao atualizar o usuário");
        }

        return usuarioAtualizado;
    }
}

export default UpdateUsuarioService;