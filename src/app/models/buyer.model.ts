export class Buyer {
    _id: number;
    fullName: string;
    city: string;
    address: string;
    phone: string;
    itemsBoughtList: number[];
    moneySpent: number;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.fullName = obj && obj.fullName || "";
        this.city = obj && obj.city || "";
        this.address = obj && obj.address || "";
        this.phone = obj && obj.phone || "";
        this.itemsBoughtList = obj && obj.itemsBoughtList || [];
        this.moneySpent = obj && obj.moneySpent || 0;
    }
}