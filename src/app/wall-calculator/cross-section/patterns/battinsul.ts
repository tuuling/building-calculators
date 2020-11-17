export class Battinsul {
  static height = 40;
  static width = 100;

  static getPatternHeight(sectionHeight: number, sectionWidth: number) {
    return (1 / (sectionHeight / (sectionWidth * 0.4)) * 100).toString() + '%';
  }
}
