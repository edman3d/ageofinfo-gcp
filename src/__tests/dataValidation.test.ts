/* eslint-disable jest/no-conditional-expect */
import { type Building, type Civilization, type Technology, type Unit } from "../types";

const units: Unit[] = require("./../data/units.json");

describe("test unit data is valid", () => {
  //   test.each(units)("testing unit ($id, $name)", ({ id, name, cost, type }) => {
  //     if (type !== "Gaia" && type !== "Unbuildable") {
  //       const costObj = JSON.parse(cost);
  //       expect(costObj).toBeInstanceOf(Object);
  //     }
  //   });

  test.each(units)("testing unit ($id, $name)", (unit) => {
    if (unit.type !== "Gaia" && unit.type !== "Unbuildable") {
      // Check that cost field is valid
      const costObj = JSON.parse(unit.cost);
      expect(costObj).toBeInstanceOf(Object);

      // Check that attack_bonus field is valid
      if (unit.attack_bonus) {
        const atkbonus = JSON.parse(unit.attack_bonus.toString());
      }
    }
  });
});
