//     code: String,
//     name: String,
//     details: String,
//     image: String,
//     price: Number,
//     company: { type: Schema.Types.ObjectId, ref: 'Company' }

import { Company } from './company';

export class Product {
    code: string;
    name: string;
    details: string;
    image: string;
    price: number;
    company: Company;
}