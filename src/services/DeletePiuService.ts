import PiuRepository from "../repositories/PiusRepository";

class DeletePiuService {
    private piuRepository: PiuRepository;

    constructor(piuRepository: PiuRepository) {
        this.piuRepository = piuRepository;
    }

    public execute(id: string): { message: string; deletedPiu: object | null } {
        
        const piu = this.piuRepository.getById(id);
        if (!piu) {
            throw new Error("Piu não encontrado.");
        }

        const deleted = this.piuRepository.delete(id);
        if (!deleted) {
            throw new Error("Erro ao deletar o Piu.");
        }

        return {
            message: "Piu deletado com sucesso.",
            deletedPiu: piu,
        };
    }
}

export default DeletePiuService;
