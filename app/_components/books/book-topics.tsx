"use client";

import { Box, Chip, Stack, Typography } from "@mui/joy";
import NextLink from "next/link";

import type { Book } from "@/types/book";
import type { BookMeta } from "@/types/book-meta";
interface BookTopicsProps {
  book?: Book;
  bookMeta?: BookMeta;
  disableLinks?: boolean;
}

interface ChipSetProps {
  data: string[];
  title?: string;
  subtitle?: string;
  path?: string;
}

export function ChipSet(props: ChipSetProps): JSX.Element | null {
  const { data = [], title = "", subtitle = "", path = "" } = props;
  const nonEmptyData =
    data && Array.isArray(data) ? data.filter((s) => s.trim().length) : [];

  return nonEmptyData?.length > 0 ? (
    <Box width="100%">
      {title ? <Typography level="h4">{title}</Typography> : null}
      {subtitle ? <Typography level="body-lg">{subtitle}</Typography> : null}
      <Stack
        direction="row"
        flexWrap="wrap"
        marginTop={1}
        rowGap={1}
        spacing={1}
        width="100%"
      >
        {nonEmptyData.map((d) =>
          path ? (
            <Chip
              color="neutral"
              component={NextLink}
              href={`/browse/${path}/${encodeURIComponent(d)}`}
              key={d}
              prefetch={false}
            >
              {d}
            </Chip>
          ) : (
            <Chip color="neutral" key={d}>
              {d}
            </Chip>
          )
        )}
      </Stack>
    </Box>
  ) : null;
}

export function BookTopics(props: BookTopicsProps): JSX.Element {
  const { bookMeta, disableLinks = false } = props;
  if (!bookMeta) {
    return <div />;
  }

  const {
    topic = [],
    timePeriod = [],
    historicalEvents = [],
    subject = [],
    tags = [],
  } = bookMeta;

  return topic?.length ||
    timePeriod?.length ||
    historicalEvents?.length ||
    subject?.length ? (
    <Box width="100%">
      <Stack direction="column" width="100%">
        {topic?.length ? (
          <Box marginTop={2}>
            <ChipSet
              data={topic}
              path={disableLinks ? "" : "topic"}
              title="Topics"
            />
          </Box>
        ) : null}
        {subject?.length ? (
          <Box marginTop={2}>
            <ChipSet
              data={subject}
              path={disableLinks ? "" : "subject"}
              title="Subject"
            />
          </Box>
        ) : null}
        {timePeriod?.length ? (
          <Box marginTop={2}>
            <ChipSet
              data={timePeriod}
              path={disableLinks ? "" : "era"}
              title="Time Period"
            />
          </Box>
        ) : null}
        {historicalEvents?.length ? (
          <Box marginTop={2}>
            <ChipSet
              data={historicalEvents}
              path={disableLinks ? "" : "event"}
              title="Historical Events"
            />
          </Box>
        ) : null}{" "}
        {tags?.length ? (
          <Box marginTop={2}>
            <ChipSet data={tags} path={""} title="Tags" />
          </Box>
        ) : null}
      </Stack>
    </Box>
  ) : (
    <Box />
  );
}
