/* eslint-disable jest/no-conditional-expect */
import { type Unit } from "../types";
import { isValidJSON } from "../util/isValidJSON";

const units: Unit[] = require("./../data/units.json");

describe("test unit data is valid", () => {
  test.each(units)("testing unit ($id, $name)", (unit) => {
    // Check that cost field is valid
    if (unit.cost) {
      expect(isValidJSON(unit.cost)).toBe(true);
    }

    // Check that attack_bonus field is valid
    if (unit.attack_bonus) {
      expect(isValidJSON(unit.attack_bonus.toString())).toBe(true);
    }

    // Check that armor_bonus field is valid
    if (unit.armor_bonus) {
      expect(isValidJSON(unit.armor_bonus.toString())).toBe(true);
    }
  });
});
