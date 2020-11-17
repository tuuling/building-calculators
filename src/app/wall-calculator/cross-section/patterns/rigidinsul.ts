export class Rigidinsul {
  static height = 50;
  static width = 50;

  static getPatternHeight(sectionHeight: number, sectionWidth: number) {
    return (1 / (sectionHeight / sectionWidth) * 100).toString() + '%';
  }
}
