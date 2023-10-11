"use client";
import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [ismounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ismounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
