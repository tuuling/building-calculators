
export interface Woodgrade {
  /**
   * Strength class of wood like C16
   */
  strengthClass: string,
  /**
   * Bending strength of wood. f_m,k In N/mm^2
   */
  bendingStrength: number,
  /**
   * Module of elasticity parallel bending of wood in Mpa or N/mm^2
   */
  moduleOfElasticity: number,
  /**
   * Mean density of material. kg/m^3
   */
  density: number
  /**
   * partial factor for material
   */
  YM: number
}

export const woodgrades = new Map<string, Woodgrade>([
  ['c14', {strengthClass: 'C14', bendingStrength: 14, moduleOfElasticity: 7000, density: 350, YM: 1.3}],
  ['c16', {strengthClass: 'C16', bendingStrength: 16, moduleOfElasticity: 8000, density: 370, YM: 1.3}],
  ['c18', {strengthClass: 'C18', bendingStrength: 18, moduleOfElasticity: 9000, density: 380, YM: 1.3}],
  ['c20', {strengthClass: 'C20', bendingStrength: 20, moduleOfElasticity: 9500, density: 390, YM: 1.3}],
  ['c22', {strengthClass: 'C22', bendingStrength: 22, moduleOfElasticity: 10000, density: 410, YM: 1.3}],
  ['c24', {strengthClass: 'C24', bendingStrength: 24, moduleOfElasticity: 11000, density: 420, YM: 1.3}],
  ['c27', {strengthClass: 'C27', bendingStrength: 27, moduleOfElasticity: 11500, density: 450, YM: 1.3}],
  ['c30', {strengthClass: 'C30', bendingStrength: 30, moduleOfElasticity: 12000, density: 460, YM: 1.3}],
  ['c35', {strengthClass: 'C35', bendingStrength: 35, moduleOfElasticity: 13000, density: 480, YM: 1.3}],
  ['c40', {strengthClass: 'C40', bendingStrength: 40, moduleOfElasticity: 14000, density: 500, YM: 1.3}],
  ['c45', {strengthClass: 'C45', bendingStrength: 45, moduleOfElasticity: 15000, density: 520, YM: 1.3}],
  ['c50', {strengthClass: 'C50', bendingStrength: 50, moduleOfElasticity: 16000, density: 550, YM: 1.3}],

  ['gl20h', {strengthClass: 'GL20h', bendingStrength: 20, moduleOfElasticity: 8400, density: 370, YM: 1.25}],
  ['gl22h', {strengthClass: 'GL22h', bendingStrength: 22, moduleOfElasticity: 10500, density: 410, YM: 1.25}],
  ['gl24h', {strengthClass: 'GL24h', bendingStrength: 24, moduleOfElasticity: 11500, density: 420, YM: 1.25}],
  ['gl28h', {strengthClass: 'GL28h', bendingStrength: 28, moduleOfElasticity: 12100, density: 445, YM: 1.25}],
  ['gl30h', {strengthClass: 'GL30h', bendingStrength: 30, moduleOfElasticity: 12600, density: 460, YM: 1.25}],
  ['gl32h', {strengthClass: 'GL32h', bendingStrength: 32, moduleOfElasticity: 13600, density: 480, YM: 1.25}],
  ['gl36h', {strengthClass: 'GL36h', bendingStrength: 36, moduleOfElasticity: 14200, density: 490, YM: 1.25}],

  ['gl20c', {strengthClass: 'GL20c', bendingStrength: 20, moduleOfElasticity: 10400, density: 390, YM: 1.25}],
  ['gl22c', {strengthClass: 'GL22c', bendingStrength: 22, moduleOfElasticity: 10400, density: 390, YM: 1.25}],
  ['gl24c', {strengthClass: 'GL24c', bendingStrength: 24, moduleOfElasticity: 11000, density: 400, YM: 1.25}],
  ['gl28c', {strengthClass: 'GL28c', bendingStrength: 28, moduleOfElasticity: 12000, density: 420, YM: 1.25}],
  ['gl30c', {strengthClass: 'GL30c', bendingStrength: 30, moduleOfElasticity: 12500, density: 420, YM: 1.25}],
  ['gl32c', {strengthClass: 'GL32c', bendingStrength: 32, moduleOfElasticity: 13000, density: 430, YM: 1.25}],
  ['gl36c', {strengthClass: 'GL36c', bendingStrength: 36, moduleOfElasticity: 13500, density: 440, YM: 1.25}],

]);
