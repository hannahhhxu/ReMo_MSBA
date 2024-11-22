"use client";

import { Box, Button, Chip, Divider, Grid, Stack, Typography } from "@mui/joy";
import { BackButton } from "@/components/ui/back-button";
import parse from "html-react-parser";
import { BookCover } from "@/components/books/book-cover";
import { BookDetail } from "@/components/books/book-detail";
import { BookTopics } from "@/components/books/book-topics";
import { Book, BookPreview } from "@/types/book";
import { BookMeta } from "@/types/book-meta";
import data from "@/data/msba_books.json";

interface BookData {
  browse: BookPreview[];
  books: { [id: string]: Book };
  bookMeta: { [id: string]: BookMeta };
}

export default function DemoBookDetailPage({
  params,
}: {
  params: { bookId: string };
}): JSX.Element {
  const { bookId = "" } = params;
  const bookData = data as BookData;
  const book: Book | undefined = bookData.books[bookId];
  const bookMetum: BookMeta | undefined = bookData.bookMeta[bookId];

  return book && bookMetum ? (
    <Box>
      <BackButton />

      <Grid container marginTop={2} spacing={8}>
        <Grid md={3} sm={4} xs={12}>
          <Box marginBottom={4}>
            <BookCover
              image={
                book.image ? book.image : "https://cdn.remo.app/not-found.jpg"
              }
              title={book.title ? book.title : ""}
            />
          </Box>
          <Stack direction="column" spacing={2}>
            <Button color="success" disabled variant="soft">
              <Typography level="body-lg">Read this book now</Typography>
            </Button>

            <Button color="success" disabled variant="soft">
              <Typography level="body-lg">Save this book for later</Typography>
            </Button>
          </Stack>
        </Grid>
        <Grid md={9} sm={8} xs={12}>
          <Typography level="h1" marginTop={1}>
            {book.title}{" "}
            {bookMetum.series &&
            bookMetum.series !== "" &&
            bookMetum.seriesBookNumber ? (
              <Chip color="success" size="lg" variant="solid">
                Book {bookMetum.seriesBookNumber}
              </Chip>
            ) : null}
          </Typography>

          <BookDetail book={book} bookMeta={bookMetum} disableLinks />

          <Box mt={4}>
            <Divider />
          </Box>

          {bookMetum.synopsis ? (
            <Box marginTop={2}>
              <Typography level="h4">Synopsis</Typography>
              <Typography level="body-md">
                {parse(bookMetum.synopsis)}
              </Typography>
            </Box>
          ) : null}

          <BookTopics bookMeta={bookMetum} disableLinks />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <div />
  );
}
