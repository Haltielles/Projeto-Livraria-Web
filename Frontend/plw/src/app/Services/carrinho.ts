export interface Carrinho {
    id: number;
    ISBN: number;
    usuario_id: number;
    quantidade: number;
    valorunidade: number;
}
export class Carrinho implements Carrinho {
    constructor() { }
}
