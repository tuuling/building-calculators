export class WallLayer {
  name: string;
  thickness: number;
  lambda: number;

  constructor(params) {
    Object.assign(this, params);
  }

  get Rvalue() {
    const R = this.thickness / 1000 / this.lambda;
    return Math.round(R * 1000) / 1000;
  }
}
