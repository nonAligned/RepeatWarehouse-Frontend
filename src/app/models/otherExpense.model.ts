export class OtherExpense {
    _id: number;
    name: string;
    cost: number;
    entry_date: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || "";
        this.cost = obj && obj.cost || null;
        this.entry_date = obj && obj.entry_date || Date.now().toString();
    }
}