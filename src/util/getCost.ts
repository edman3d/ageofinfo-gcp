export type CostType = {
  Wood?: number;
  Food?: number;
  Gold?: number;
  Stone?: number;
};

export default function getCostObject(delimitedString: string): CostType {
  if (delimitedString.length < 4) {
    throw new SyntaxError("Cost string must be 4 or more characters");
  }
  const costString = delimitedString.replace(";", ",");
  const costObj = JSON.parse(costString);
  return costObj;
}
