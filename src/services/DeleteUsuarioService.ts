import UsuarioRepository from "../repositories/UsuarioRepository";

interface DeleteUsuarioRequest {
    id: string;
}

class DeleteUsuarioService {
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public execute( data: DeleteUsuarioRequest) {

        const usuarioExistente = this.usuarioRepository.getById(data.id);

        if (!usuarioExistente) {
            throw new Error("Usuário não encontrado");
        }

        const index = this.usuarioRepository.findIndex(data.id);
        
        const usuarioDeletado = this.usuarioRepository.delete(index);

        return usuarioExistente;
}
}

export default DeleteUsuarioService;