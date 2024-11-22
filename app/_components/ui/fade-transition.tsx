"use client";

import { m } from "framer-motion";

export function FadeTransition({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <m.div
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      initial={{ y: 40, opacity: 0 }}
      transition={{ duration: 0.5 }}>
      {children}
    </m.div>
  );
}
