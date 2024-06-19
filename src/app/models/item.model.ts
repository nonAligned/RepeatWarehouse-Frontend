export class Item {
    _id: number;
    type: string;
    gender: string;
    size: string;
    shoulder_width: number;
    waist_width: number;
    hip_width: number;
    leg_width: number;
    sleeve_length: number;
    total_length: number;
    total_width: number;
    color: string[];
    description: string;
    material: string;
    purchase_price: number;
    retail_price: number;
    sold: boolean;
    donated: boolean;
    active: boolean;
    stored: boolean;
    condition: string;
    photo: string;
    entry_date: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.type = obj && obj.type || "";
        this.gender = obj && obj.gender || "";
        this.size = obj && obj.size || "";
        this.shoulder_width = obj && obj.shoulder_width || 0;
        this.waist_width = obj && obj.waist_width || 0;
        this.hip_width = obj && obj.hip_width || 0;
        this.leg_width = obj && obj.leg_width || 0;
        this.sleeve_length = obj && obj.sleeve_length || 0;
        this.total_length = obj && obj.total_length || 0;
        this.total_width = obj && obj.total_width || 0;
        this.color = obj && obj.color || [];
        this.description = obj && obj.description || "";
        this.material = obj && obj.material || "";
        this.purchase_price = obj && obj.purchase_price || 0;
        this.retail_price = obj && obj.retail_price || 0;
        this.sold = obj && obj.sold || false;
        this.donated = obj && obj.donated || false;
        this.active = obj && obj.active || false;
        this.stored = obj && obj.stored || false;
        this.condition = obj && obj.condition || "";
        this.photo = obj && obj.photo || "";
        this.entry_date = obj && obj.entry_date || Date.now().toString();
    }
}