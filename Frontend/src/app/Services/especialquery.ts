export interface Livro {
    ISBN: string;
    title: string;
    description: string;
    price: number;
    publisher: string;
    pubdate: string;
    edition: string;
    pages: number;
    author: {
        AuthorID: number;
        strFName: string;
        strLName: string;
    }[];
}
export class Livro implements Livro {
    constructor() {

    }
}
