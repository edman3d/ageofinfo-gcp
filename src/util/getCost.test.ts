import getCostObject from "./getCost";
import type { Cost } from "../types";

describe("getCost function tests", () => {
  test("gets single cost value correctly", () => {
    const costString = '{"Food": 50}';
    const costObject: Cost = getCostObject(costString);
    expect(costObject.Food).toEqual(50);
  });
  test("gets multiple cost value correctly", () => {
    const costString = '{"Food": 65;"Gold": 20}';
    const costObject: Cost = getCostObject(costString);
    expect(costObject.Food).toEqual(65);
    expect(costObject.Gold).toEqual(20);
  });
  test("return empty object if delimited string is too short", () => {
    const costString = "{x}";
    expect(() => getCostObject(costString)).toThrow(SyntaxError);
    expect(() => getCostObject(costString)).toThrow("Cost string must be 4 or more characters");
  });
  test("malformed cost string throws SyntaxError", () => {
    const costString = '{Food: 65;"Gold": 20}';
    expect(() => getCostObject(costString)).toThrow(SyntaxError);
  });
});
