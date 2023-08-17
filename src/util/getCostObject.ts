import { Cost } from "../types";

export function getCostObject(delimitedString: string): Cost {
  if (delimitedString === "N/A") {
    return {};
  }
  if (delimitedString.length < 3) {
    throw new SyntaxError("Cost string must be 3 or more characters");
  }
  const costString = delimitedString.replace(";", ",");
  const costObj = JSON.parse(costString);
  return costObj;
}
