import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import ClientLayout from "./client-layout";

export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "MSBA 2024",
  description: "MSBA 2024",
  category: "education",
  openGraph: {
    title: "MSBA 2024",
    type: "website",
    description: "MSBA 2024",
  },
};

export default function MSBARootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
