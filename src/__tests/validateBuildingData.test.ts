/* eslint-disable jest/no-conditional-expect */
import { type Building } from "../types";
import { isValidJSON } from "../util/isValidJSON";

const buildings: Building[] = require("./../data/buildings.json");

describe("test buildings data is valid", () => {
  test.each(buildings)("testing building ($name)", (building) => {
    // Check that cost field is valid
    if (building.cost) {
      expect(isValidJSON(building.cost)).toBe(true);
    }
  });
});
