export interface BaseHatch {
  width: number;
  height: number;
  getPatternHeight: (sectionHeight: number, sectionWidth: number) => string;
  getPatternWidth: (sectionHeight: number, sectionWidth: number) => string;
  getStrokeWidth: (sectionHeight: number, sectionWidth: number) => number;
  d: string;
}
