import { ObservationModel } from "../observation/observation.model";

export class WeatherModel {
  sourceId: string;
  referenceTime: Date;
  observations: ObservationModel[];

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
