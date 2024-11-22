"use client";

import { Link, Typography } from "@mui/joy";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

export function BackButton({ label = "Back", link = "" }): JSX.Element {
  const router = useRouter();
  return link.length > 0 ? (
    <Link component={NextLink} href={link} prefetch={false}>
      <Typography level="body-md">&lt; {label}</Typography>
    </Link>
  ) : (
    <Link
      onClick={() => {
        router.back();
      }}>
      <Typography level="body-md">&lt; {label}</Typography>
    </Link>
  );
}
