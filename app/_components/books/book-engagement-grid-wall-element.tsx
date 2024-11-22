"use client";

import { Grid } from "@mui/joy";
import { BookEngagementPreviewElement } from "./book-engagement-preview";
import type { BookPreview } from "@/types/book";

interface BookGridWallElementProps {
  book: BookPreview;
  path?: string;
}

export function BookEngagementGridWallElement(
  props: BookGridWallElementProps
): JSX.Element {
  const { book, path } = props;
  return (
    <Grid key={book._id} md={2} sm={3} xs={6}>
      <BookEngagementPreviewElement book={book} path={path} />
    </Grid>
  );
}
