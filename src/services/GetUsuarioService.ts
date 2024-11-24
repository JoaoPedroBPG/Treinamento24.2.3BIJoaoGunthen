import Usuario from "../models/UsuarioModels";
import UsuarioRepository from "../repositories/UsuarioRepository";  

interface GetUsuarioRequest{
    id: string;
}

class GetUsuarioService {
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository){  
        this.usuarioRepository = usuarioRepository;
    }

    public execute(data:GetUsuarioRequest ){
       const usuarioId = this.usuarioRepository.getById(data.id);

       if(!usuarioId){
           throw new Error("Usuário não encontrado");
       }
    } 
    
}
export default GetUsuarioService;  