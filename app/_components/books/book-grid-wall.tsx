"use client";

import { Box, Grid, Typography } from "@mui/joy";
import type { BookPreview } from "@/types/book";
import { BookGridWallElement } from "./book-grid-wall-element";

interface BookGridWallProps {
  title: string;
  books: BookPreview[];
  hideLibraryPath?: boolean;
}

export function BookGridWall(props: BookGridWallProps): JSX.Element {
  const { title = "Books", books = [], hideLibraryPath = false } = props;

  return books.length ? (
    <Box>
      {title ? (
        <Typography level="h3" marginBottom={2}>
          {title}
        </Typography>
      ) : null}
      <Grid container spacing={4}>
        {books.map((b) => (
          <BookGridWallElement
            book={b}
            key={String(b._id)}
            hideLibraryPath={hideLibraryPath}
          />
        ))}
      </Grid>
    </Box>
  ) : (
    <div />
  );
}
