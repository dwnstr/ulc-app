"use client";

import { ConfigsProvider } from "./configs.context";
import { ModalProvider } from "./modal.context"

export const Providers = ({ children }) => {
  return (
    <ModalProvider>
      <ConfigsProvider>
        {children}
      </ConfigsProvider>
    </ModalProvider>
  )
};
