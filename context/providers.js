"use client";

import { ConfigsProvider } from "./configs.context";

export const Providers = ({ children }) => {
  return <ConfigsProvider>{children}</ConfigsProvider>;
};
