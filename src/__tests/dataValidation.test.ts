/* eslint-disable jest/no-conditional-expect */
import { type Unit } from "../types";

const units: Unit[] = require("./../data/units.json");

const isValidJSON = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

describe("test unit data is valid", () => {
  test.each(units)("testing unit ($id, $name)", (unit) => {
    if (unit.type !== "Gaia" && unit.type !== "Unbuildable") {
      // Check that cost field is valid
      expect(isValidJSON(unit.cost)).toBe(true);

      // Check that attack_bonus field is valid
      if (unit.attack_bonus) {
        expect(isValidJSON(unit.attack_bonus.toString())).toBe(true);
      }
    }
  });
});
