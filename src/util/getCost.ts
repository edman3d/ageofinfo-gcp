export type CostType = {
  Wood?: number;
  Food?: number;
  Gold?: number;
  Stone?: number;
};

export default function getCostObject(delimitedString: string): CostType {
  if (delimitedString.length < 4) {
    return {};
  }
  const costString = delimitedString.replace(";", ",");
  const costObj = JSON.parse(costString);
  return costObj;
}
