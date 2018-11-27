export interface Bookdescription {
    ISBN: string;
    title: string;
    description: string;
    price: number;
    publisher: string;
    pubdate: string;
    edition: string;
    pages: number;
}

export class Bookdescription implements Bookdescription {
    constructor() { }
}
