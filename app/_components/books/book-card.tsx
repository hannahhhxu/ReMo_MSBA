"use client";

import { AspectRatio, Box, Button, Grid, Stack, Typography } from "@mui/joy";
import NextLink from "next/link";
import Image from "next/image";
import { ContentBox } from "@/components/ui/content-box";
import type { BookEngagement } from "@/types/book-engagement";

interface BookCardProps {
  book?: BookEngagement;
}
export function BookCard(props: BookCardProps): JSX.Element {
  const { book } = props;
  const { _id = "", title = "", image = "" } = book ? book : {};
  return (
    <ContentBox>
      <Grid container spacing={2}>
        {book ? (
          <Grid md={4} sm={4} xs={12}>
            <AspectRatio
              ratio="2/3"
              sx={(theme) => ({
                backgroundColor: theme.vars.palette.neutral[300],
                borderRadius: "10px",
              })}
            >
              <Image alt={title} fill sizes="360px" src={image} unoptimized />
            </AspectRatio>
          </Grid>
        ) : (
          <Grid md={2} sm={2} xs={12} />
        )}
        <Grid md={8} sm={8} xs={12}>
          {book ? (
            <Stack
              alignItems="flex-start"
              direction="column"
              height="100%"
              justifyContent="space-evenly"
              spacing={2}
            >
              <Box flexGrow={2}>
                <Typography level="h4" marginBottom={2}>
                  {title}
                </Typography>
                <Typography level="body-md" marginBottom={2}>
                  {`So far you've read this book for XX minutes, and finished XX pages`}
                </Typography>
                <Box marginBottom={2}>
                  <Button
                    color="success"
                    component={NextLink}
                    href={`/checkin/${_id}`}
                    prefetch={false}
                    variant="soft"
                  >
                    <Typography level="body-lg">
                      Update your progress
                    </Typography>
                  </Button>
                </Box>
                <Box marginBottom={2}>
                  <Button
                    color="success"
                    component={NextLink}
                    href={`/record-reading-rate/${_id}`}
                    prefetch={false}
                    variant="soft"
                  >
                    <Typography level="body-lg">Track your reading</Typography>
                  </Button>
                </Box>
                <Box>
                  <Button
                    color="success"
                    component={NextLink}
                    href={`/write-response/${_id}`}
                    prefetch={false}
                    variant="soft"
                  >
                    <Typography level="body-lg">Write response</Typography>
                  </Button>
                </Box>
              </Box>
            </Stack>
          ) : (
            <Stack
              alignItems="center"
              direction="column"
              height="100%"
              justifyContent="center"
              spacing={2}
            >
              <Typography
                level="h2"
                textAlign="center"
              >{`You aren't reading a book right now`}</Typography>
              <Box>
                <Button
                  color="danger"
                  component={NextLink}
                  href="/browse"
                  prefetch={false}
                  size="lg"
                  variant="soft"
                >
                  <Typography level="body-lg">Go find one!</Typography>
                </Button>
              </Box>
            </Stack>
          )}
        </Grid>
      </Grid>
    </ContentBox>
  );
}
