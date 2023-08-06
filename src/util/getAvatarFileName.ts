export function getRequiresAgeFileName(name: string): string {
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

export function getCreatedInFileName(name: string): string {
  switch (name) {
    case "Archery Range":
      return `archery-range.png`;
    case "Barracks":
      return `barracks.png`;
    case "Castle":
      return `castle.png`;
    case "Dock":
      return `dock.png`;
    case "Donjon":
      return `donjon.png`;
    case "Folwark":
      return `folwark.png`;
    case "Harbor":
      return `harbor.png`;
    case "Krepost":
      return `krepost.png`;
    case "Monastery":
      return `monastery.png`;
    case "Stable":
      return `stable.png`;
    case "Siege Workshop":
      return `siege-workshop.png`;
    case "Town Center":
      return `town-center.png`;
    default:
      return "barracks.png";
  }
}
