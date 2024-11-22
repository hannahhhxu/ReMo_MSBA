"use client";

import { Grid } from "@mui/joy";
import type { BookPreview } from "@/types/book";
import { BookPreviewElement } from "./book-preview";

interface BookGridWallElementProps {
  book: BookPreview;
  hideLibraryPath?: boolean;
}

export function BookGridWallElement(
  props: BookGridWallElementProps
): JSX.Element {
  const { book, hideLibraryPath = false } = props;

  return (
    <Grid key={book._id} md={2} sm={3} xs={6}>
      <BookPreviewElement book={book} hideLibraryPath={hideLibraryPath} />
    </Grid>
  );
}
