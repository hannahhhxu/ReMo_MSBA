"use client";

import { Box, Stack, Typography } from "@mui/joy";
import type { Book } from "@/types/book";
import type { BookMeta } from "@/types/book-meta";
import { ChipSet } from "./book-topics";

interface BookDetailProps {
  book?: Book;
  bookMeta?: BookMeta;
  disableLinks?: boolean;
}

export function BookDetail(props: BookDetailProps): JSX.Element {
  const { bookMeta, book, disableLinks = false } = props;
  if (!bookMeta) {
    return <div />;
  }

  const { author = "", genre = [], narrativeForm = [] } = bookMeta;

  const { pageCount = "" } = book ? book : {};

  return (
    <Box>
      <Stack direction="column" height="100%">
        <Typography level="body-lg">by {author}</Typography>
        {pageCount ? (
          <Typography level="body-lg">{pageCount} pages</Typography>
        ) : null}

        <ChipSet data={genre} path={disableLinks ? "" : "genre"} title="" />
        <ChipSet
          data={narrativeForm}
          path={disableLinks ? "" : "form"}
          title=""
        />
      </Stack>
    </Box>
  );
}
