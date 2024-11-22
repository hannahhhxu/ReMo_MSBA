"use client";

import { Box, Chip, Stack, Typography } from "@mui/joy";
import type { BookPreview } from "@/types/book";
import { BookCover } from "./book-cover";

interface BookPreviewProps {
  book: BookPreview;
  path?: string;
}

export function BookEngagementPreviewElement(
  props: BookPreviewProps
): JSX.Element {
  const { book, path = "book" } = props;
  const {
    bookEngagement,
    title = "Book",
    image = "https://cdn.remo.app/not-found.jpg",
    pageCount = "",
    isFiction = false,
    isNonFiction = false,
    isBlended = false,
    series = "",
    seriesBookNumber = 0,
  } = book;

  const { _id = "", percentRead = 0 } = bookEngagement ? bookEngagement : {};
  const href = path === "book" ? `/${path}/${book._id}` : `/${path}/${_id}`;
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
        href={href}
        image={image}
        progress={
          bookEngagement?.shelf === "active" ||
          bookEngagement?.shelf === "stopped"
            ? percentRead * 100
            : 0
        }
        title={title}
      />
      <Box>
        <Typography level="title-sm">{title}</Typography>
        <Typography level="body-sm">{details.join(", ")}</Typography>
        {series && series !== "" ? (
          <Box>
            <Chip color="success" variant="solid">
              Book {seriesBookNumber}
            </Chip>
          </Box>
        ) : null}
      </Box>
    </Stack>
  );
}
