import { LevelModel } from "../levels/level.model";

export class ObservationModel {
  elementId: string;
  value: number;
  unit: string;
  level: LevelModel;
  timeOffset: string;
  timeResolution: string;
  timeSeriesId: number;
  performanceCategory: string;
  exposureCategory: string;
  qualityCode: number;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
