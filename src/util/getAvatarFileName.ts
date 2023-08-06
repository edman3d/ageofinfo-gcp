export default function getRequiresAgeFileName(name: string): string {
  switch (name) {
    case "Dark":
      return `dark-age.png`;
    case "Feudal":
      return `feudal-age.png`;
    case "Castle":
      return `castle-age.png`;
    case "Imperial":
      return `imperial-age.png`;
    default:
      return "dark-age.png";
  }
}
