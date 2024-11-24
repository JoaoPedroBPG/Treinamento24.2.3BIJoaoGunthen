import Piu from "../models/PiusModels";
import PiuRepository from "../repositories/PiusRepository";
import UsuarioRepository from "../repositories/UsuarioRepository";

interface AddPiuRequest {
    userId: string;
    texto: string;
    likes: number;
    comentarios: number;
    dataDePublicacao: Date;
    dataDeEdicao: Date;
}

class AddPiuService {
    private piuRepository: PiuRepository;
    private usuarioRepository: UsuarioRepository;

    constructor(piuRepository: PiuRepository, usuarioRepository: UsuarioRepository) {
        this.piuRepository = piuRepository;
        this.usuarioRepository = usuarioRepository;
    }

    public execute(data: AddPiuRequest): Piu {
        
        if (!data.texto || data.texto.length < 1 || data.texto.length > 140) {
            throw new Error("O texto do piu deve ter entre 1 e 140 caracteres.");
        }

        
        const usuario = this.usuarioRepository.getById(data.userId);
        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        
        const piu = this.piuRepository.add(data);

        return piu;
    }
}

export default AddPiuService;
