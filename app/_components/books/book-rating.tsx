"use client";

import { Box, Button, Stack, Typography } from "@mui/joy";
import { PiSmileyBold, PiSmileyMehBold, PiSmileySadBold } from "react-icons/pi";

interface BookRatingProps {
  rating?: number;
}
export function BookRating(props: BookRatingProps): JSX.Element {
  const { rating = 0 } = props;

  return rating === 1 || rating === 3 || rating === 5 ? (
    <Box marginTop={2}>
      <Stack spacing={2}>
        {rating === 5 ? (
          <Button
            color="neutral"
            size="lg"
            sx={{ flexDirection: "column" }}
            variant="soft"
          >
            <PiSmileyBold />
            <Typography level="body-md" marginTop={1}>
              Loved it!
            </Typography>
          </Button>
        ) : null}
        {rating === 3 ? (
          <Button
            color="neutral"
            size="lg"
            sx={{ flexDirection: "column" }}
            variant="soft"
          >
            <PiSmileyMehBold />
            <Typography level="body-md" marginTop={1}>
              It was okay
            </Typography>
          </Button>
        ) : null}
        {rating === 1 ? (
          <Button
            color="neutral"
            size="lg"
            sx={{ flexDirection: "column" }}
            variant="soft"
          >
            <PiSmileySadBold />
            <Typography level="body-md" marginTop={1}>
              {`Didn't like it all`}
            </Typography>
          </Button>
        ) : null}
      </Stack>
    </Box>
  ) : (
    <div />
  );
}
