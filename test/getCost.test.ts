import getCostObject, { CostType } from "../src/util/getCost";

describe("Sample test suite", () => {
  test("gets single cost value correctly", () => {
    const costString = '{"Food": 50}';
    const costObject: CostType = getCostObject(costString);
    expect(costObject.Food).toEqual(50);
  });
  test("gets multiple cost value correctly", () => {
    const costString = '{"Food": 65;"Gold": 20}';
    const costObject: CostType = getCostObject(costString);
    expect(costObject.Food).toEqual(65);
    expect(costObject.Gold).toEqual(20);
  });
});
