export interface Usuario {
    id: number;
    login: string;
    senha: string;
    cep: string;
    email: string;
}
export class Usuario implements Usuario {
    constructor() { }
}
