import { Consumable } from "./consumable.model";

export class ConsumableList {
    count: number;
    results: Consumable[];

    constructor(obj?: any) {
        this.count = obj && obj.count || null;
        if (this.count != 0) {
            this.results = obj && obj.results || null;
        } else {
            this.results = [];
        }
    }
}