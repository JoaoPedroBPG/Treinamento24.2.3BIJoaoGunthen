import { v4 as uuid } from "uuid";

interface Request {
    userId: string;
    texto: string;
    likes: number;
    comentarios: number;
    dataDePublicacao: Date;
    dataDeEdicao: Date;
}

class Piu {
    userId: string;
    texto: string;
    likes: number;
    comentarios: number;
    dataDePublicacao: Date;
    dataDeEdicao: Date;
    id: string;

    constructor(data: Request) {
        this.userId = data.userId;
        this.texto = data.texto;
        this.likes = data.likes || 0;
        this.comentarios = data.comentarios || 0; 
        this.dataDePublicacao = data.dataDePublicacao || new Date();
        this.dataDeEdicao = data.dataDeEdicao || new Date();
        this.id = uuid();
    }
}

export default Piu;