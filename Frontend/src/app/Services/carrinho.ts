export interface Carrinho {
    id: number;
    ISBN: string;
    titulo: string;
    usuario_id: number;
    quantidade: number;
    valorunidade: number;
}
export class Carrinho implements Carrinho {
    constructor() { }
}
