export interface Compra {
    id_compra: number;
    id_usuario: number;
    id_carrinho: number;
    frete: number;
    valortotal: number;
}
export class Compra implements Compra {
    constructor() { }
}
