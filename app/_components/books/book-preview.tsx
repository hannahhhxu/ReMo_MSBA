"use client";

import { Box, Chip, Stack, Typography } from "@mui/joy";
import type { BookPreview } from "@/types/book";
import { BookCover } from "./book-cover";

interface BookPreviewProps {
  book: BookPreview;
  path?: string;
  hideLibraryPath?: boolean;
  disableLink?: boolean;
}

export function BookPreviewElement(props: BookPreviewProps): JSX.Element {
  const { book, hideLibraryPath = false, disableLink = false } = props;
  const {
    title = "Book",
    image = "https://cdn.remo.app/not-found.jpg",
    author = "",
    pageCount = "",
    isFiction = false,
    isNonFiction = false,
    isBlended = false,
    series = "",
    seriesBookNumber = 0,
    books = [],
  } = book;
  const displayImage = image ? image : "https://cdn.remo.app/not-found.jpg";

  const b = books.length > 0 ? books[0] : { library: "", _id: "" };
  const { library = "", _id = "" } = b ? b : {};
  // eslint-disable-next-line no-nested-ternary -- for now
  const href = _id
    ? library && !hideLibraryPath
      ? `/library/${String(library)}/book/${_id}`
      : `/book/${book._id}`
    : "";

  const details = [];
  if (isBlended) {
    details.push("Fiction/Non-Fiction");
  } else {
    if (isFiction) {
      details.push("Fiction");
    }
    if (isNonFiction) {
      details.push("Non-Fiction");
    }
  }
  const pages = parseInt(pageCount, 10);
  if (!isNaN(pages) && pages > 0) {
    details.push(`${pages} pages`);
  }

  return (
    <Stack direction="column" spacing={1}>
      <BookCover
        href={disableLink ? "" : href}
        image={displayImage}
        title={title}
      />
      <Box>
        <Typography level="title-sm">{title}</Typography>
        {typeof author === "string" ? (
          <Typography level="body-sm">by {author.toString()}</Typography>
        ) : null}

        <Typography level="body-sm">{details.join(", ")}</Typography>

        {series && series !== "" ? (
          <Box>
            <Chip color="success" size="sm" variant="solid">
              Book {seriesBookNumber}
            </Chip>
          </Box>
        ) : null}
      </Box>
    </Stack>
  );
}
