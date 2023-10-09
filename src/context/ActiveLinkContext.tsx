import { createContext, useState, ReactNode } from "react";

interface ActiveLinkContextType {
  activeLink: string;
  setLink: (link: string) => void;
}

export const ActiveLinkContext = createContext<
  ActiveLinkContextType | undefined
>(undefined);

export function ActiveLinkProvider({ children }: { children: ReactNode }) {
  const [activeLink, setActiveLink] = useState("Profile");

  const setLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
}
