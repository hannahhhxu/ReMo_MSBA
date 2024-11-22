"use client";

import type { BoxProps } from "@mui/joy";
import { Box } from "@mui/joy";

export function ContentBox(props: BoxProps): JSX.Element {
  const { children } = props;

  return (
    <Box
      borderRadius="20px"
      padding={3}
      sx={(theme) => ({
        backgroundColor: "#FFF",
        boxShadow: theme.vars.shadow.lg,
      })}
      width="100%"
      {...props}>
      {children}
    </Box>
  );
}
