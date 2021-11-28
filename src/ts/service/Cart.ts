import IBuyable from '../domain/iBuyable';

export default class Cart {
    private _items: IBuyable[] = [];

    add(item: IBuyable): void {
        this._items.push(item);
    }

    get items(): IBuyable[] {
        return [...this._items];
    }
}
