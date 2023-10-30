import { type Civilization } from "../types";

const civs: Civilization[] = require("./../data/civs.json");

describe("test civ data is valid", () => {
  test.each(civs)("testing civ ($name)", (civ) => {
    // Every civ should have multiple civ bonuses
    expect(civ.civilization_bonus.split(";").length).toBeGreaterThan(1);

    // Every civ should have two unique techs
    expect(civ.unique_tech.split(";").length).toBe(2);

    // Every civ should have at least one unique unit with an elite counterpart
    expect(civ.unique_unit.split(";").length).toBeGreaterThan(1);
  });
});
