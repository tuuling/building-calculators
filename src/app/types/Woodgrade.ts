export interface Woodgrade {
  /**
   * Strength class of wood like C16
   */
  strengthClass: string,
  /**
   * values of strength (in N/mm2)
   */
  f: {
    /**
     * characteristic value of bending strength (in N/mm2)
     */
    m: number,
    /**
     * values of tensile strength (in N/mm2)
     */
    t: {
      /**
       * characteristic value of tensile strength parallel to grain (in N/mm2)
       */
      paral: number,
      /**
       * characteristic value of tensile strength perpendicular to grain (in N/mm2)
       */
      perp: number
    },
    /**
     * values of compressive strength (in N/mm2)
     */
    c: {
      /**
       * characteristic value of compressive strength parallel to grain (in N/mm2)
       */
      paral: number,
      /**
       * characteristic value of compressive strength perpendicular to grain (in N/mm2)
       */
      perp: number
    },
    /**
     * characteristic value of shear strength (in N/mm2)
     */
    v: number
  }
  /**
   * values of modulus of elasticity (in N/mm2)
   */
  E: {
    /**
     * mean characteristic value of modulus of elasticity parallel to grain (in N/mm2)
     */
    mean: number,
    /**
     * 5-percentile characteristic value of modulus of elasticity parallel to grain (in N/mm2)
     */
    fivePerc: number,
    /**
     * mean characteristic value of modulus of elasticity perpendicular to grain (in N/mm2)
     */
    meanPerp: number,
  }
  /**
   *  value of shear modulus(in N/mm2)
   */
  G: {
    /**
     * mean characteristic value of shear modulus(in N/mm2)
     */
    mean: number
  }
  /**
   *  values of density(in N/mm2)
   */
  D: {
    /**
     * characteristic value of density (in kg/m3)
     */
    k: number,
    /**
     * mean value of density (in kg/m3)
     */
    mean: number;
  }
  /**
   * partial factor for material
   */
  type: 'sawn' | 'gluelam'
}

export const woodgrades = new Map<string, Woodgrade>([
  // EN 338:2009
  ['c14', {
    strengthClass: 'C14', type: 'sawn',
    f: { m: 14, t: { paral: 8, perp: 0.4 }, c: { paral: 16, perp: 2 }, v: 3 },
    E: { mean: 7000, fivePerc: 4700, meanPerp: 230 },
    G: { mean: 440 },
    D: { k: 290, mean: 350 }
  }],
  ['c16', {
    strengthClass: 'C16', type: 'sawn',
    f: { m: 16, t: { paral: 10, perp: 0.4 }, c: { paral: 17, perp: 2.2 }, v: 3.2 },
    E: { mean: 8000, fivePerc: 5400, meanPerp: 270 },
    G: { mean: 500 },
    D: { k: 310, mean: 370 }
  }],
  ['c18', {
    strengthClass: 'C18', type: 'sawn',
    f: { m: 18, t: { paral: 11, perp: 0.4 }, c: { paral: 18, perp: 2.2 }, v: 3.4 },
    E: { mean: 9000, fivePerc: 6000, meanPerp: 300 },
    G: { mean: 560 },
    D: { k: 320, mean: 380 }
  }],
  ['c20', {
    strengthClass: 'C20', type: 'sawn',
    f: { m: 20, t: { paral: 12, perp: 0.4 }, c: { paral: 19, perp: 2.3 }, v: 3.6 },
    E: { mean: 9500, fivePerc: 6400, meanPerp: 320 },
    G: { mean: 590 },
    D: { k: 330, mean: 390 }
  }],
  ['c22', {
    strengthClass: 'C22', type: 'sawn',
    f: { m: 22, t: { paral: 13, perp: 0.4 }, c: { paral: 20, perp: 2.4 }, v: 3.8 },
    E: { mean: 10000, fivePerc: 6700, meanPerp: 330 },
    G: { mean: 630 },
    D: { k: 340, mean: 410 }
  }],
  ['c24', {
    strengthClass: 'C24', type: 'sawn',
    f: { m: 24, t: { paral: 14, perp: 0.4 }, c: { paral: 21, perp: 2.5 }, v: 4.0 },
    E: { mean: 11000, fivePerc: 7400, meanPerp: 370 },
    G: { mean: 690 },
    D: { k: 350, mean: 420 }
  }],
  ['c27', {
    strengthClass: 'C27', type: 'sawn',
    f: { m: 27, t: { paral: 16, perp: 0.4 }, c: { paral: 22, perp: 2.6 }, v: 4.0 },
    E: { mean: 11500, fivePerc: 7700, meanPerp: 380 },
    G: { mean: 720 },
    D: { k: 370, mean: 450 }
  }],
  ['c30', {
    strengthClass: 'C30', type: 'sawn',
    f: { m: 30, t: { paral: 18, perp: 0.4 }, c: { paral: 23, perp: 2.7 }, v: 4.0 },
    E: { mean: 12000, fivePerc: 8000, meanPerp: 400 },
    G: { mean: 750 },
    D: { k: 380, mean: 460 }
  }],
  ['c35', {
    strengthClass: 'C35', type: 'sawn',
    f: { m: 35, t: { paral: 21, perp: 0.4 }, c: { paral: 25, perp: 2.8 }, v: 4.0 },
    E: { mean: 13000, fivePerc: 8700, meanPerp: 430 },
    G: { mean: 810 },
    D: { k: 400, mean: 480 }
  }],
  ['c40', {
    strengthClass: 'C40', type: 'sawn',
    f: { m: 40, t: { paral: 24, perp: 0.4 }, c: { paral: 26, perp: 2.9 }, v: 4.0 },
    E: { mean: 14000, fivePerc: 9400, meanPerp: 470 },
    G: { mean: 880 },
    D: { k: 420, mean: 500 }
  }],
  ['c45', {
    strengthClass: 'C45', type: 'sawn',
    f: { m: 45, t: { paral: 27, perp: 0.4 }, c: { paral: 27, perp: 3.1 }, v: 4.0 },
    E: { mean: 15000, fivePerc: 10000, meanPerp: 500 },
    G: { mean: 940 },
    D: { k: 440, mean: 520 }
  }],
  ['c50', {
    strengthClass: 'C50', type: 'sawn',
    f: { m: 50, t: { paral: 30, perp: 0.4 }, c: { paral: 29, perp: 3.2 }, v: 4.0 },
    E: { mean: 16000, fivePerc: 10700, meanPerp: 530 },
    G: { mean: 1000 },
    D: { k: 460, mean: 550 }
  }],
  //EN 14080:2013
  ['gl20h', {
    strengthClass: 'GL20h', type: 'gluelam',
    f: { m: 20, t: { paral: 16, perp: 0.5 }, c: { paral: 20, perp: 2.5 }, v: 3.5 },
    E: { mean: 8400, fivePerc: 7000, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 340, mean: 370 }
  }],
  ['gl22h', {
    strengthClass: 'GL22h', type: 'gluelam',
    f: { m: 22, t: { paral: 17.6, perp: 0.5 }, c: { paral: 22, perp: 2.5 }, v: 3.5 },
    E: { mean: 10500, fivePerc: 8800, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 370, mean: 410 }
  }],
  ['gl24h', {
    strengthClass: 'GL24h', type: 'gluelam',
    f: { m: 24, t: { paral: 19.2, perp: 0.5 }, c: { paral: 24, perp: 2.5 }, v: 3.5 },
    E: { mean: 11500, fivePerc: 9600, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 385, mean: 430 }
  }],
  ['gl26h', {
    strengthClass: 'GL26h', type: 'gluelam',
    f: { m: 26, t: { paral: 20.8, perp: 0.5 }, c: { paral: 26, perp: 2.5 }, v: 3.5 },
    E: { mean: 12100, fivePerc: 10100, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 405, mean: 445 }
  }],
  ['gl28h', {
    strengthClass: 'GL28h', type: 'gluelam',
    f: { m: 28, t: { paral: 22.3, perp: 0.5 }, c: { paral: 28, perp: 2.5 }, v: 3.5 },
    E: { mean: 12600, fivePerc: 10500, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 425, mean: 460 }
  }],
  ['gl30h', {
    strengthClass: 'GL30h', type: 'gluelam',
    f: { m: 30, t: { paral: 24, perp: 0.5 }, c: { paral: 30, perp: 2.5 }, v: 3.5 },
    E: { mean: 13600, fivePerc: 11300, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 430, mean: 480 }
  }],
  ['gl32h', {
    strengthClass: 'GL32h', type: 'gluelam',
    f: { m: 32, t: { paral: 25.6, perp: 0.5 }, c: { paral: 32, perp: 2.5 }, v: 3.5 },
    E: { mean: 14200, fivePerc: 11800, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 440, mean: 490 }
  }],

  ['gl20c', {
    strengthClass: 'GL20c', type: 'gluelam',
    f: { m: 20, t: { paral: 15, perp: 0.5 }, c: { paral: 18.5, perp: 2.5 }, v: 3.5 },
    E: { mean: 10400, fivePerc: 8600, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 355, mean: 390 }
  }],
  ['gl22c', {
    strengthClass: 'GL22c', type: 'gluelam',
    f: { m: 22, t: { paral: 16, perp: 0.5 }, c: { paral: 20, perp: 2.5 }, v: 3.5 },
    E: { mean: 10400, fivePerc: 8600, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 355, mean: 390 }
  }],
  ['gl24c', {
    strengthClass: 'GL24c', type: 'gluelam',
    f: { m: 24, t: { paral: 17, perp: 0.5 }, c: { paral: 21.5, perp: 2.5 }, v: 3.5 },
    E: { mean: 11000, fivePerc: 9100, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 365, mean: 400 }
  }],
  ['gl26c', {
    strengthClass: 'GL26c', type: 'gluelam',
    f: { m: 26, t: { paral: 19, perp: 0.5 }, c: { paral: 23.5, perp: 2.5 }, v: 3.5 },
    E: { mean: 12000, fivePerc: 10000, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 385, mean: 420 }
  }],
  ['gl28c', {
    strengthClass: 'GL28c', type: 'gluelam',
    f: { m: 28, t: { paral: 19.5, perp: 0.5 }, c: { paral: 24, perp: 2.5 }, v: 3.5 },
    E: { mean: 12500, fivePerc: 10400, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 390, mean: 420 }
  }],
  ['gl30c', {
    strengthClass: 'GL30c', type: 'gluelam',
    f: { m: 30, t: { paral: 19.5, perp: 0.5 }, c: { paral: 24.5, perp: 2.5 }, v: 3.5 },
    E: { mean: 13000, fivePerc: 10800, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 390, mean: 430 }
  }],
  ['gl32c', {
    strengthClass: 'GL32c', type: 'gluelam',
    f: { m: 32, t: { paral: 19.5, perp: 0.5 }, c: { paral: 24.5, perp: 2.5 }, v: 3.5 },
    E: { mean: 13500, fivePerc: 11200, meanPerp: 300 },
    G: { mean: 650 },
    D: { k: 400, mean: 440 }
  }],
]);
