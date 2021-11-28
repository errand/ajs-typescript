import IBuyable from './iBuyable';

export default class Movie implements IBuyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly slogan: string,
        readonly price: number,
        readonly pages: number,
    ) {}
}
