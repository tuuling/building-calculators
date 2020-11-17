import { BaseHatch } from './baseHatch';
const height = 50;
const width = 50;

export const rigidinsul: BaseHatch = {
  height,
  width,
  getPatternHeight: (sectionHeight: number, sectionWidth: number) => {
    return (1 / (sectionHeight / sectionWidth) * 100).toString() + '%';
  },
  getPatternWidth: () => '100%',

  getStrokeWidth: (sectionHeight: number, sectionWidth: number) => {
    return width / sectionWidth;
  },

  d: `M50,0
      L0,25
      L50,50`
};
