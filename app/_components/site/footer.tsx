"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/joy";

export default function Footer(): JSX.Element {
  return (
    <Box
      component="footer"
      padding={2}
      sx={[
        {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          bgcolor: "background.surface",
          borderTop: "1px solid",
          borderColor: "divider",
          position: "fixed",
          bottom: 0,
          right: 0,
          zIndex: 1100,
          width: "100%",
        },
      ]}
    >
      <Typography
        level="body-md"
        sx={{ marginRight: "0.5rem", color: "text.primary" }}
      >
        Powered by
      </Typography>
      <Image alt="ReMo logo" src="/remo-logo.png" height="38" width="104" />
    </Box>
  );
}
