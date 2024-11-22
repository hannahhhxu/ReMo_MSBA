"use client";

import { Box } from "@mui/joy";
import type { BookPreview } from "@/types/book";
import { BookGridWall } from "./book-grid-wall";

interface BookSeriesGridWallProps {
  books: BookPreview[];
  hideLibraryPath?: boolean;
}

export const sortBySeriesNumber = (a: BookPreview, b: BookPreview): number => {
  if (a.seriesBookNumber && b.seriesBookNumber) {
    if (a.seriesBookNumber < b.seriesBookNumber) {
      return -1;
    } else if (b.seriesBookNumber < a.seriesBookNumber) {
      return 1;
    }
  } else {
    if (a.seriesBookNumber) {
      return -1;
    }
    if (b.seriesBookNumber) {
      return 1;
    }
  }
  return 0;
};

export function BookSeriesGridWall(
  props: BookSeriesGridWallProps
): JSX.Element {
  const { books = [], hideLibraryPath = false } = props;

  const series: Record<string, BookPreview[]> = {};
  books.forEach((b) => {
    if (b.series) {
      if (series[b.series]) {
        series[b.series]?.push(b);
      } else {
        series[b.series] = [b];
      }
    }
  });

  const names = Object.keys(series).sort();

  return names.length ? (
    <Box>
      {names.map((name) => {
        const obj = series[name];
        if (obj) {
          return (
            <Box key={name} marginBottom={4}>
              <BookGridWall
                books={obj.sort(sortBySeriesNumber)}
                hideLibraryPath={hideLibraryPath}
                title={name}
              />
            </Box>
          );
        }
        return null;
      })}
    </Box>
  ) : (
    <div />
  );
}
