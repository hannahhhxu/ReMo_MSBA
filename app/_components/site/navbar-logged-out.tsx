"use client";

import Box from "@mui/joy/Box";
import { IconContext } from "react-icons";
import { Stack, Typography } from "@mui/joy";
import { AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import Image from "next/image";

export default function NavbarLoggedOut(): JSX.Element {
  return (
    <Box
      component="header"
      padding={2}
      sx={{
        bgcolor: "white",
        borderBottom: "1px solid transparent",
        position: "sticky",
        top: 0,
        zIndex: 1100,
        width: "100%",
        paddingY: 0,
      }}
    >
      <IconContext.Provider
        value={{ style: { width: "28px", height: "28px", color: "#000" } }}
      >
        <AnimatePresence initial={false}>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={2}
          >
            <Box key="navbarLeft" sx={{ padding: 1 }}>
              <Image
                alt="MSBA logo"
                height="95"
                src="/msba-logo.png"
                width="120"
              />
            </Box>

            <Box
              key="navbarRight"
              sx={{
                display: "flex",
                alignItems: "center", // Center items vertically
              }}
            >
              <Typography
                level="body-lg"
                sx={{ marginRight: "0.5rem", color: "text.primary" }}
              >
                Sponsored by
              </Typography>
              <Image
                alt="ReMo logo"
                src="/remo-logo.png"
                height="38"
                width="104"
              />
            </Box>
          </Stack>
        </AnimatePresence>
      </IconContext.Provider>
    </Box>
  );
}
