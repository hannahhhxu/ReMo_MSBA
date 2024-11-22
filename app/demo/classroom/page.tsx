"use client";

import data from "@/data/msba_books.json";

import { Box, Typography, CircularProgress, Button, Grid } from "@mui/joy";

interface GoalDisplayProps {
  title: string;
  achieved: number;
  outOf: number;
}

interface ShapeProps {
  circle: number;
  square: number;
  triangle: number;
}

interface BookProps {
  _id: string;
  image: string;
  title: string;
  shapes: ShapeProps;
}

export default function DemoClassroomPage(): JSX.Element {
  const filteredBooks = data.browse
    .filter((_, index) => ![0, 2, 4, 7].includes(index))
    .slice(0, 10);

  // The numbers for the shapes below the books
  const shapesNumbers: ShapeProps[] = [
    { circle: 4, square: 10, triangle: 2 },
    { circle: 4, square: 0, triangle: 5 },
    { circle: 8, square: 3, triangle: 0 },
    { circle: 5, square: 10, triangle: 2 },
    { circle: 7, square: 1, triangle: 4 },
  ];

  const goals = {
    msbaVotingGoal: 3,
    personalGoal: 30,
    classGoal: 20,
    msbaListGoal: 40,
  };

  const GoalDisplay = (props: GoalDisplayProps) => {
    const { title, achieved, outOf } = props;
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 4,
          mb: -6,
        }}
      >
        <Typography level="h3" sx={{ mb: 2, color: "#353130" }}>
          {title}
        </Typography>

        <CircularProgress
          color="primary"
          value={(achieved / outOf) * 100}
          thickness={12}
          sx={{ "--CircularProgress-size": "195px" }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              level="h3"
              sx={{ mt: -2, color: "#353130" }}
            >{`${achieved}/${outOf}`}</Typography>
            <Typography level="title-md" sx={{ color: "#353130" }}>
              Books Read{" "}
            </Typography>
            <Typography level="body-sm" sx={{ mt: 1, color: "#353130" }}>
              You made it! Congrats!{" "}
            </Typography>
          </Box>
        </CircularProgress>
        {title !== "MSBA Voting Goal" && title !== "MSBA List Goal" && (
          <Button
            size="sm"
            sx={{
              mt: 1,
              backgroundColor: "#DEC0E3",
              color: "#752E94",
              "&:hover": {
                backgroundColor: "#c997d2",
              },
            }}
          >
            Edit Goal
          </Button>
        )}
      </Box>
    );
  };

  // Component to display a single book with shapes
  const BookDisplay = (props: BookProps) => {
    const { image, title, shapes } = props;
    return (
      <Grid
        sx={{
          mb: 2,
          width: { xs: "100%", sm: "50%", md: "20%" },
        }}
      >
        <Box
          sx={{
            mb: 8,
            mt: -3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <img
              src={image}
              alt={title}
              style={{
                width: "180px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: -5,
              }}
            >
              {/* Circle */}
              <svg width="37" height="37" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10.5" fill="#FF6384" />
                <text
                  x="12"
                  y="16"
                  fontSize="10"
                  fill="#fff"
                  textAnchor="middle"
                >
                  {shapes.circle}
                </text>
              </svg>
              {/* Square */}
              <svg width="38" height="38" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18.5" height="18.5" fill="#36A2EB" />
                <text
                  x="12"
                  y="16"
                  fontSize="10"
                  fill="#fff"
                  textAnchor="middle"
                >
                  {shapes.square}
                </text>
              </svg>
              {/* Triangle */}
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path d="M12 3L21 21H3L12 3Z" fill="#FFCE56" />
                <text
                  x="12"
                  y="20"
                  fontSize="10"
                  fill="#333"
                  textAnchor="middle"
                  dy="-3"
                >
                  {shapes.triangle}
                </text>
              </svg>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  };

  const ShapesLegend = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        p: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        {/* Circle */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" fill="#FF6384" />
        </svg>
        <Typography sx={{ ml: 1 }}>finished</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        {/* Square */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" fill="#36A2EB" />
        </svg>
        <Typography sx={{ ml: 1 }}>currently reading</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        {/* Triangle */}
        <svg width="24" height="24" viewBox="2 4 20 20">
          <path d="M12 5L19 19H5L12 5Z" fill="#FFCE56" />
        </svg>
        <Typography sx={{ ml: 1 }}>did not finish</Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ p: 2 }}>
      <Typography level="h1" sx={{ mb: 2 }}>
        Your Classroom
      </Typography>

      <Box
        sx={{
          backgroundColor: "#FADBD8",
          padding: "20px",
          borderRadius: "12px",
          mt: 4,
        }}
      >
        <Grid container spacing={2} sx={{ mb: 8 }}>
          <Grid xs={6} sm={3}>
            <GoalDisplay
              title="MSBA Voting Goal"
              achieved={goals.msbaVotingGoal}
              outOf={3}
            />
          </Grid>
          <Grid xs={6} sm={3}>
            <GoalDisplay
              title="My Personal Goal"
              achieved={goals.personalGoal}
              outOf={30}
            />
          </Grid>
          <Grid xs={6} sm={3}>
            <GoalDisplay
              title="Our Class Goal"
              achieved={goals.classGoal}
              outOf={20}
            />
          </Grid>
          <Grid xs={6} sm={3}>
            <GoalDisplay
              title="MSBA List Goal"
              achieved={goals.msbaListGoal}
              outOf={40}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: "#Fde0a2",
          padding: "20px",
          borderRadius: "12px",
          mt: 6,
          mb: 20,
        }}
      >
        <Typography
          level="h3"
          sx={{ mt: 3, mb: 4, textAlign: "center", color: "#353130" }}
        >
          Status of the Class
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            mr: 2,
            mt: -7,
            mb: 4,
          }}
        >
          <Button
            size="md"
            disabled
            sx={{
              backgroundColor: "#DEC0E3",
              color: "#752E94",
              "&:hover": {
                backgroundColor: "#DEC0E3",
              },
              "&.Mui-disabled": {
                opacity: 1,
                color: "#752E94 !important",
                backgroundColor: "#DEC0E3 !important",
              },
            }}
          >
            Class 1
          </Button>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {filteredBooks.map((book, index) => {
            // Error handling for missing book ID
            if (!book._id) {
              console.error("Book at index", index, "is missing an _id");
              return null; // Skip this book
            }
            // Safeguard to ensure there's a shapes object for each book
            const bookShapes = shapesNumbers[index % shapesNumbers.length];
            if (!bookShapes) {
              console.error("No shapes defined for book at index", index);
              return null; // Skip this book
            }

            return (
              <BookDisplay
                _id={book._id}
                image={book.image}
                key={book._id}
                title={book.title}
                shapes={bookShapes}
              />
            );
          })}
        </Grid>

        {/* Shapes Legend */}
        <Box
          sx={{
            mb: -95,
            ml: 19.7,
            position: "absolute",
            left: 0,
            bottom: 0,
            backgroundColor: "#FAF9F6",
            padding: 0.5,
            borderRadius: 16,
          }}
        >
          <ShapesLegend />
        </Box>

        {/* Next page Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 16,
            mb: 5,
            mr: 2,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#DEC0E3",
              color: "#752E94",
              "&:hover": {
                backgroundColor: "#c997d2",
              },
            }}
          >
            Next Page &gt;
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
