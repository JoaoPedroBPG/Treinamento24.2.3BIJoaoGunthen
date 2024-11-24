import Piu from "../models/PiusModels";

interface AddPiuRequest {
    userId: string;
    texto: string;
    likes: number;
    comentarios: number;
    dataDePublicacao: Date;
    dataDeEdicao: Date;
}

interface UpdatePiuRequest {
    id: string;

    data: {
        texto: string;
        likes: number;
        comentarios: number;
        dataDeEdicao: Date;
    };
}

class PiuRepository {
    private pius: Piu[];

    constructor() {
        this.pius = [];
    }

    public add({ userId, texto, likes, comentarios, dataDePublicacao, dataDeEdicao }: AddPiuRequest): Piu {
        const piu = new Piu({ userId, texto, likes: likes || 0, comentarios: comentarios || 0, dataDePublicacao, dataDeEdicao });
        this.pius.push(piu);
        return piu;
    }

    public getAll(): Piu[] {
        return this.pius;
    }

    public getById(id: string): Piu | undefined {
        return this.pius.find((piu) => piu.id === id);
    }

    public findByUserId(userId: string): Piu[] {
        return this.pius.filter((piu) => piu.userId === userId);
    }

    public update(data: UpdatePiuRequest): Piu | undefined {
        const piuIndex = this.pius.findIndex((piu) => piu.id === data.id);

        if (piuIndex === -1) {
            return undefined;
        }

        const piuExistente = this.pius[piuIndex];
        this.pius[piuIndex] = { ...piuExistente, ...data.data, dataDeEdicao: new Date() };

        return this.pius[piuIndex];
    }

    public delete(id: string): boolean {
        const piuIndex = this.pius.findIndex((piu) => piu.id === id);

        if (piuIndex === -1) {
            return false;
        }

        this.pius.splice(piuIndex, 1);
        return true;
    }
}

export default PiuRepository;
