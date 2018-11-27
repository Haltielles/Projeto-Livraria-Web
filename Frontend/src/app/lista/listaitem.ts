export class ListaItem {
    constructor(
        public isbn: string,
        public title: string,
        public autors: Array<string>,
        public description: string,
        public price: number,
        public publisher: string,
        public pubdate: string,
        public edition: string,
        public pages: number) { }
}
