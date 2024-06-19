export class Marketing {
    _id: number;
    start_date: string;
    end_date: string;
    active: boolean;
    cost: number;
    type: string;
    target_audience: string;
    age_group: string;
    platform: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.start_date = obj && obj.start_date || Date.now().toString();
        this.end_date = obj && obj.end_date || "";
        this.active = obj && obj.active || true;
        this.cost = obj && obj.cost || null;
        this.type = obj && obj.type || "";
        this.target_audience = obj && obj.target_audience || "";
        this.age_group = obj && obj.age_group || "";
        this.platform = obj && obj.platform || "";
    }
}