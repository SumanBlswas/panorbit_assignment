import { useContext } from "react";
import { ActiveLinkContext } from "./ActiveLinkContext";

export function useActiveLink() {
  const context = useContext(ActiveLinkContext);
  if (!context) {
    throw new Error("useActiveLink must be used within an ActiveLinkProvider");
  }
  return context;
}
