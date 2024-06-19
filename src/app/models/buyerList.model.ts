import { Buyer } from "./buyer.model";

export class BuyerList {
    count: number;
    results: Buyer[];

    constructor(obj?: any) {
        this.count = obj && obj.count || null;
        if (this.count != 0) {
            this.results = obj && obj.results || null;
        } else {
            this.results = [];
        }
    }
}