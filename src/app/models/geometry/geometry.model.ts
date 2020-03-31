export class GeometryModel {
    "@type": string;
    coordinates: number[];
    nearest: boolean;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
