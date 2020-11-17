import { BaseHatch } from './baseHatch';

const height = 40;
const width = 100;

export const battinsul: BaseHatch = {
  height,
  width,
  getPatternHeight: (sectionHeight: number, sectionWidth: number) => {
    return (1 / (sectionHeight / (sectionWidth * (height / width))) * 100).toString() + '%';
  },
  getPatternWidth: () => '100%',

  getStrokeWidth: (sectionHeight: number, sectionWidth: number) => {
    return width / sectionWidth;
  },

  d: `M 0,0
      a 20,20 0,0,0 20,20
      l 60,-20
      a 20,20 0,0,1 0,40
      l -60,-20
      a 20,20 0,0,0 -20,20`
};

