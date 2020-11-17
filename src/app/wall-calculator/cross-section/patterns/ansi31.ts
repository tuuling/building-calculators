import { BaseHatch } from './baseHatch';

const height = 10;
const width = 10;

export const ansi31: BaseHatch = {
  width,
  height,

  getPatternHeight: (sectionHeight: number) => {
    return (1 / (sectionHeight / height) * 100).toString() + '%';
  },
  getPatternWidth: (sectionHeight: number, sectionWidth: number) => {
    return (1 / (sectionWidth / width) * 100).toString() + '%';
  },
  getStrokeWidth: () => 1,

  d: `M10,0 L0,10
      M20,0 L0,20
      M10,-10 L-10,10`
};

