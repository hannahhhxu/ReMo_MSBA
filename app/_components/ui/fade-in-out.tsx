"use client";

import { m } from "framer-motion";

export function FadeInOut({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <m.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      {children}
    </m.div>
  );
}
