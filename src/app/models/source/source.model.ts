import { GeometryModel } from "../geometry/geometry.model";

export class SourceModel {
  "@type": string;
  id: string;
  name: string;
  shortName: string;
  country: string;
  countryCode: string;
  geometry: GeometryModel;
  masl: number;
  validFrom: Date;
  county: string;
  countyId: number;
  municipality: string;
  municipalityId: number;
  stationHolders: string[];
  externalIds: number[];
  wigosId: string;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
