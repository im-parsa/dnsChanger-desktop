import path from "path";

export function getIconPath(): string {
  let icon;

  switch (process.platform) {
    case "win32":
      icon = path.resolve( "assets", "icon.ico");
      break;
    case "darwin":
      icon = path.resolve("assets", "icon.ico");
      break;
    case "linux":
      icon = path.resolve( "assets", "icon.png");
      break;
    default:
      icon = path.resolve( "assets", "icon.png");
      break;
  }
  return icon;
}
