import { type Technology } from "../types";
import { isValidJSON } from "../util/isValidJSON";

const techs: Technology[] = require("./../data/techs.json");

describe("test tech data is valid", () => {
  test.each(techs)("testing tech ($name)", (tech) => {
    // Every tech should have a valid cost
    expect(isValidJSON(tech.cost)).toBe(true);
  });
});
