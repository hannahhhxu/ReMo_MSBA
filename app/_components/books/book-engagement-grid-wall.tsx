"use client";

import { Box, Grid, Typography } from "@mui/joy";
import type { BookPreview } from "@/types/book";
import { BookEngagementGridWallElement } from "./book-engagement-grid-wall-element";

interface BookGridWallProps {
  title: string;
  books: BookPreview[];
}

export function BookEngagementGridWall(props: BookGridWallProps): JSX.Element {
  const { title = "Books", books = [] } = props;

  return books.length ? (
    <Box>
      {title ? (
        <Typography level="h3" marginBottom={4}>
          {title}
        </Typography>
      ) : null}
      <Grid container spacing={4}>
        {books.map((b) => (
          <BookEngagementGridWallElement book={b} key={String(b._id)} />
        ))}
      </Grid>
    </Box>
  ) : (
    <div />
  );
}
