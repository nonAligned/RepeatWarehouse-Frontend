import { Marketing } from "./marketing.model";

export class MarketingList {
    count: number;
    results: Marketing[];

    constructor(obj?: any) {
        this.count = obj && obj.count || null;
        if (this.count != 0) {
            this.results = obj && obj.results || null;
        } else {
            this.results = [];
        }
    }
}