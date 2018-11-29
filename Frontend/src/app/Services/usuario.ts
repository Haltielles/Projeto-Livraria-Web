export interface Usuario {
    custID: number;
    fname: string;
    lname: string;
    email: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}
export class Usuario implements Usuario {
    constructor() { }
}
