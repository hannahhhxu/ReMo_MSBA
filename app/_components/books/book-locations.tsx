"use client";

import { Box, Typography } from "@mui/joy";
import type { Book } from "@/types/book";
import type { Library } from "@/types/library";

interface BookLocationProps {
  books?: Book[];
  libraries: Library[];
}

interface BookCount {
  library: string;
  count: number;
  format: string;
}

export function BookLocation(props: BookLocationProps): JSX.Element {
  const { books = [], libraries = [] } = props;

  const emptyRecord: Record<string, string> = {};
  const libraryLookup = libraries.reduce((acc, curr) => {
    const educatorNames = curr.educators
      ? curr.educators.map((e) => e.displayName).join(" & ")
      : "";
    acc[curr._id] = `${educatorNames}${educatorNames.length ? "'s" : ""} ${
      curr.name
    }`;
    return acc;
  }, emptyRecord);

  const emptyCount: Record<string, BookCount> = {};
  const items = books.reduce((acc, curr) => {
    if (curr.library?._id) {
      const id = `${curr.format ? curr.format : ""}-${curr.library._id}`;
      const obj = acc[id];
      if (obj) {
        obj.count = obj.count + 1;
        acc[id] = obj;
      } else {
        acc[id] = {
          format: curr.format ? curr.format.toLowerCase() : "",
          library: curr.library._id,
          count: 1,
        };
      }
    }
    return acc;
  }, emptyCount);

  return Object.keys(items).length ? (
    <Box marginTop={4}>
      <Typography level="h4">Where can I find this book</Typography>
      <ul>
        {Object.keys(items).map((b) => {
          const obj = items[b];
          return obj ? (
            <li key={b}>
              {obj.count}{" "}
              {obj.format.toLowerCase() === "unknown" ? " " : obj.format}
              {obj.count < 2 ? " copy is" : " copies are"} in{" "}
              {libraryLookup[obj.library]}
            </li>
          ) : null;
        })}
      </ul>
    </Box>
  ) : (
    <div />
  );
}

/*

 <li>
          There are XX format copy/copies in teacher's library name library Mrs.
        </li>
        <li>Davis has XX format copy/copies in the XX library</li>
        */
