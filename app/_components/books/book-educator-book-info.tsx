"use client";

import { Box, Divider, Typography } from "@mui/joy";
import type { Book } from "@/types/book";

interface BookEducatorBookInfoProps {
  book?: Book;
}

export function BookEducatorBookInfo(
  props: BookEducatorBookInfoProps
): JSX.Element {
  const { book } = props;

  const {
    isbn10 = "",
    isbn13 = "",
    format = "",
    edition = "",
    copyrightDate = "",
  } = book ? book : {};

  if (!book) {
    return <div />;
  }

  return (
    <Box p={2}>
      <Box mb={2}>
        <Typography level="h4">Library Information</Typography>
        <Divider />
      </Box>
      <Box mb={2}>
        <Typography level="body-lg">
          <b>ISBN10: </b> {isbn10}
        </Typography>
        <Typography level="body-lg">
          <b>ISBN13: </b> {isbn13}
        </Typography>
        <Typography level="body-lg">
          <b>Format: </b> {format}
        </Typography>
        <Typography level="body-lg">
          <b>Edition: </b> {edition}
        </Typography>
        <Typography level="body-lg">
          <b>Copyright: </b> {copyrightDate}
        </Typography>
      </Box>
    </Box>
  );
}
