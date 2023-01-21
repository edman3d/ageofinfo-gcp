export default function getCostObject(delimitedString: string) {
  const costString = delimitedString.replace(";", ",");
  const costObj = JSON.parse(costString);
  console.log(costObj);
  return costObj;
}

// const testCost = '{"Wood": 75;"Gold": 60}';

// getCostObject(testCost);
