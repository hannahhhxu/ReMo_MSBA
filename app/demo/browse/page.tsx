"use client";

import { useState } from "react";
import { Box, Chip, Grid, Option, Select, Stack, Typography } from "@mui/joy";
import { BookGridWall } from "@/components/books/book-grid-wall";
import data from "@/data/msba_books.json";
import { BookPreview } from "@/types/book";
import { BookMeta } from "@/types/book-meta";

interface MSBABookPreview extends BookPreview {
  authorLastName?: string;
  library46?: boolean;
  library68?: boolean;
}

const categories = [
  "All Books",
  "Adventure/Survival",
  "Fantasy",
  "Historical Fiction",
  "Humorous",
  "Magical Realism",
  "Mystery",
  "Poetic Narrative",
  "Realistic Fiction",
  "Scary/Horror",
  "Science Fiction",
  "Sports",
  "Nonfiction Biographies",
  "Nonfiction General",
  "Graphic Novel",
  "Grades 4-6",
  "Grades 6-8",
];

const filterFunctions: {
  [id: string]: (book: MSBABookPreview, bookMeta: BookMeta) => boolean;
} = {
  "All Books": (b, bm) => {
    return true;
  },
  "Adventure/Survival": (b, bm) => {
    return Boolean(bm.topic?.includes("Adventure & Survival"));
  },
  Fantasy: (b, bm) => {
    return bm.genre && Array.isArray(bm.genre)
      ? Boolean(
          bm.genre.includes("Animal Fantasy") ||
            bm.genre.includes("High Fantasy") ||
            bm.genre.includes("Low Fantasy") ||
            bm.genre.includes("Historical Fantasy") ||
            bm.genre.includes("Fiction: Fantasy")
        )
      : false;
  },
  "Historical Fiction": (b, bm) => {
    return bm.genre &&
      Array.isArray(bm.genre) &&
      bm.timePeriod &&
      Array.isArray(bm.timePeriod) &&
      bm.historicalEvents &&
      Array.isArray(bm.historicalEvents)
      ? Boolean(
          bm.genre.includes("Fiction: Realistic") &&
            (bm.historicalEvents.length || bm.timePeriod.length)
        )
      : false;
  },
  Humorous: (b, bm) => {
    return Boolean(bm.topic?.includes("Humor"));
  },
  "Magical Realism": (b, bm) => {
    return bm.genre && Array.isArray(bm.genre)
      ? Boolean(bm.genre.includes("Magical Realism"))
      : false;
  },
  Mystery: (b, bm) => {
    return bm.genre && Array.isArray(bm.genre)
      ? Boolean(
          bm.genre.includes("Psychological Thriller") ||
            bm.genre.includes("Fiction: Mystery & Crime")
        )
      : false;
  },
  "Poetic Narrative": (b, bm) => {
    return bm.narrativeForm && Array.isArray(bm.narrativeForm)
      ? Boolean(bm.narrativeForm.includes("Novels-In-Verse"))
      : false;
  },
  "Realistic Fiction": (b, bm) => {
    return bm.genre && Array.isArray(bm.genre)
      ? Boolean(
          bm.genre.includes("Alternative History") ||
            bm.genre.includes("Fiction: Realistic")
        )
      : false;
  },
  "Scary/Horror": (b, bm) => {
    return bm.genre && Array.isArray(bm.genre)
      ? Boolean(bm.genre.includes("Fiction: Horror & Supernatural"))
      : false;
  },
  "Science Fiction": (b, bm) => {
    return bm.genre && Array.isArray(bm.genre)
      ? Boolean(
          bm.genre.includes("Dystopian") ||
            bm.genre.includes("Fiction: Science Fiction")
        )
      : false;
  },
  "Short Stories": (b, bm) => {
    return bm.narrativeForm && Array.isArray(bm.narrativeForm)
      ? Boolean(bm.narrativeForm.includes("Short Stories"))
      : false;
  },
  Sports: (b, bm) => {
    return Boolean(bm.topic?.includes("Sports"));
  },
  "Nonfiction Biographies": (b, bm) => {
    return bm.genre && Array.isArray(bm.genre)
      ? Boolean(
          bm.genre.includes("Autobiography") ||
            bm.genre.includes("Biography") ||
            bm.genre.includes("Memoir") ||
            bm.genre.includes("Nonfiction: Narrative (Bios)")
        )
      : false;
  },
  "Nonfiction General": (b, bm) => {
    return bm.genre && Array.isArray(bm.genre)
      ? Boolean(
          bm.genre.includes("Nonfiction: Active") ||
            bm.genre.includes("Nonfiction: Browseable") ||
            bm.genre.includes("Nonfiction: Expository Literature") ||
            bm.genre.includes("Nonfiction: Traditional")
        )
      : false;
  },
  "Graphic Novel": (b, bm) => {
    return bm.narrativeForm && Array.isArray(bm.narrativeForm)
      ? Boolean(bm.narrativeForm.includes("Comics & Graphic Novels & Manga"))
      : false;
  },
  "Grades 4-6": (b, bm) => {
    return Boolean(b.library46);
  },
  "Grades 6-8": (b, bm) => {
    return Boolean(b.library68);
  },
};

const sortFunctions: {
  [id: string]: (a: MSBABookPreview, b: MSBABookPreview) => number;
} = {
  TITLE_ASC: (a, b) => {
    if (a.title && b.title) {
      if (a.title < b.title) {
        return -1;
      } else if (b.title < a.title) {
        return 1;
      }
    } else if (a.title) {
      return -1;
    } else if (b.title) {
      return 1;
    }
    return 0;
  },
  TITLE_DESC: (a, b) => {
    if (a.title && b.title) {
      if (a.title < b.title) {
        return 1;
      } else if (b.title < a.title) {
        return -1;
      }
    } else if (a.title) {
      return 1;
    } else if (b.title) {
      return -1;
    }
    return 0;
  },
  AUTHOR_ASC: (a, b) => {
    if (a.authorLastName && b.authorLastName) {
      if (a.authorLastName < b.authorLastName) {
        return -1;
      } else if (b.authorLastName < a.authorLastName) {
        return 1;
      }
    } else if (a.authorLastName) {
      return -1;
    } else if (b.authorLastName) {
      return 1;
    }
    return 0;
  },
  AUTHOR_DESC: (a, b) => {
    if (a.authorLastName && b.authorLastName) {
      if (a.authorLastName < b.authorLastName) {
        return 1;
      } else if (b.authorLastName < a.authorLastName) {
        return -1;
      }
    } else if (a.authorLastName) {
      return 1;
    } else if (b.authorLastName) {
      return -1;
    }
    return 0;
  },
};

export default function DemoBrowsePage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Books");
  const [sortOption, setSortOption] = useState<string>("TITLE_ASC");

  const browse = data.browse as MSBABookPreview[];
  const bookMetas = data.bookMeta as { [id: string]: BookMeta };

  const books = browse
    .filter((b) => filterFunctions[selectedCategory](b, bookMetas[b._id]))
    .sort(sortFunctions[sortOption]);

  return (
    <Box p={2} mb={12}>
      <Typography level="h1" mb={2}>
        Find Your MSBA Books
      </Typography>
      <Grid container marginBottom={2} spacing={3}>
        <Grid md={9} sm={12}>
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            {categories.map((category) => (
              <Chip
                color="primary"
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "soft" : "outlined"}
              >
                {category}
              </Chip>
            ))}
          </Stack>
        </Grid>

        <Grid md={3} sm={12}>
          <Select
            onChange={(e, newValue) => {
              setSortOption(newValue ? newValue : "");
            }}
            value={sortOption}
          >
            <Option value="TITLE_ASC">Sort by title A-Z</Option>
            <Option value="TITLE_DESC">Sort by title Z-A</Option>
            <Option value="AUTHOR_ASC">Sort by author A-Z</Option>
            <Option value="AUTHOR_DESC">Sort by author Z-A</Option>
          </Select>
        </Grid>
      </Grid>

      {browse && browse.length > 0 ? (
        <BookGridWall books={books} title="" />
      ) : (
        <Typography>No books found for this category.</Typography>
      )}
    </Box>
  );
}
