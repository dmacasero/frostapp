export class LevelModel {
  levelType: string;
  unit: string;
  value: number;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
