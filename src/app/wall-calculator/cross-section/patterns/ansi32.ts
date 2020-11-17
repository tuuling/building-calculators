import { BaseHatch } from './baseHatch';

const height = 30;
const width = 30;

export const ansi32: BaseHatch = {
  width,
  height,

  getPatternHeight: (sectionHeight: number) => {
    return (1 / (sectionHeight / height) * 100).toString() + '%';
  },
  getPatternWidth: (sectionHeight: number, sectionWidth: number) => {
    return (1 / (sectionWidth / width) * 100).toString() + '%';
  },
  getStrokeWidth: () => 1,

  d: `M11,-1 L-1,11
      M21,-1 L-1,21
      M31,9 L9,31
      M31,19 L19,31`
};

