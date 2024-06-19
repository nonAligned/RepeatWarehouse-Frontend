export class Consumable {
    _id: number;
    name: string;
    purchase_price: number;
    entry_date: string;
    quantity: number;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || "";
        this.purchase_price = obj && obj.purchase_price || null;
        this.entry_date = obj && obj.entry_date || Date.now().toString();
        this.quantity = obj && obj.quantity || null;
    }
}