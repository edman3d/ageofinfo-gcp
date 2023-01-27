export type CostType = {
  Wood?: number;
  Food?: number;
  Gold?: number;
  Stone?: number;
};

export default function getCostObject(delimitedString: string): CostType {
  // console.log(delimitedString);
  if (delimitedString.length < 4) {
    return {};
  }
  const costString = delimitedString.replace(";", ",");
  const costObj = JSON.parse(costString);
  // console.log(costObj);
  return costObj;
}

// const testCost = '{"Wood": 75;"Gold": 60}';

// getCostObject(testCost);
