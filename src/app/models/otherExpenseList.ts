import { OtherExpense } from "./otherExpense.model";

export class OtherExpenseList {
    count: number;
    results: OtherExpense[];

    constructor(obj?: any) {
        this.count = obj && obj.count || null;
        if (this.count != 0) {
            this.results = obj && obj.results || null;
        } else {
            this.results = [];
        }
    }
}