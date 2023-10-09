export function getActiveLink(currentPath: string): string {
  if (currentPath.includes("/homepage/posts")) {
    return "Posts";
  } else if (currentPath.includes("/homepage/gallery")) {
    return "Gallery";
  } else if (currentPath.includes("/homepage/todo")) {
    return "ToDo";
  }
  return "Profile";
}
