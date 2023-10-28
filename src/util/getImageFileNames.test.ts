import { getCreatedInFileName, getRequiresAgeFileName } from "./getImageFileNames";

describe("getCreatedInFileName() function tests", () => {
  test("returns correct image for parameter", () => {
    const mockBuilding: string = "Archery Range";
    const underTest: string = getCreatedInFileName(mockBuilding);
    expect(underTest).toEqual("archery-range.png");
  });
  test("returns correct default image if not found", () => {
    const mockBuilding: string = "Archery Rangee";
    const underTest: string = getCreatedInFileName(mockBuilding);
    expect(underTest).toEqual("castle.png");
  });
  test("ends with proper file extension", () => {
    const mockBuilding: string = "Dock";
    const underTest: string = getCreatedInFileName(mockBuilding);
    expect(underTest).toEqual("dock.png");
    expect(underTest.endsWith(".png")).toBeTruthy();
  });
});

describe("getRequiresAgeFileName() function tests", () => {
  test("returns correct image for parameter", () => {
    const mockAge: string = "Feudal";
    const underTest: string = getRequiresAgeFileName(mockAge);
    expect(underTest).toEqual("feudal-age.png");
  });
  test("returns correct default image if not found", () => {
    const mockAge: string = "Feudall";
    const underTest: string = getRequiresAgeFileName(mockAge);
    expect(underTest).toEqual("dark-age.png");
  });
  test("ends with proper file extension", () => {
    const mockAge: string = "Imperial";
    const underTest: string = getRequiresAgeFileName(mockAge);
    expect(underTest).toEqual("imperial-age.png");
    expect(underTest.endsWith(".png")).toBeTruthy();
  });
  test("failure test", () => {
    expect(1).toEqual(2);
  });
});
