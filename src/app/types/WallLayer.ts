import { v4 } from 'uuid';

export class WallLayer {
  UUID: string;
  name: string;
  thickness: number;
  lambda: number;
  hatch: string = null;

  constructor(params) {
    Object.assign(this, params);
    this.UUID = v4();
  }

  get Rvalue() {
    const R = this.thickness / 1000 / this.lambda;
    return Math.round(R * 1000) / 1000;
  }
}
