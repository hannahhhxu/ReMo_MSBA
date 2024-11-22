"use client";
import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Box, Button, Stack, Typography } from "@mui/joy";
import data from "@/data/msba_books.json";
import { BookPreviewElement } from "@/components/books/book-preview";
import type { BookPreview } from "@/types/book";

interface reOrderProps {
  list: BookPreview[];
  startIndex: number;
  endIndex: number;
}

export default function DemoVotePage(): JSX.Element {
  // Initialize state for selected and available books
  const [selectedBooks, setSelectedBooks] = useState<BookPreview[]>([]);
  const [availableBooks, setAvailableBooks] = useState<BookPreview[]>(
    data.browse.slice(0, 4)
  );

  // reorder the result
  const reOrder = (props: reOrderProps) => {
    const { list, startIndex, endIndex } = props;
    if (list.length === 0) {
      return [];
    }
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    console.log(result);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // If dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      // Reordering within the same list
      const items = reOrder({
        list:
          source.droppableId === "availableBooks"
            ? availableBooks
            : selectedBooks,
        startIndex: source.index,
        endIndex: destination.index,
      });

      if (source.droppableId === "availableBooks") {
        setAvailableBooks(items);
      } else {
        setSelectedBooks(items);
      }
    } else {
      // Moving from one list to another
      const sourceItems =
        source.droppableId === "availableBooks"
          ? [...availableBooks]
          : [...selectedBooks];

      const destinationItems =
        destination.droppableId === "availableBooks"
          ? [...availableBooks]
          : [...selectedBooks];

      const [movedItem] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, movedItem);

      if (source.droppableId === "availableBooks") {
        setAvailableBooks(sourceItems);
        setSelectedBooks(destinationItems);
      } else {
        setSelectedBooks(sourceItems);
        setAvailableBooks(destinationItems);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box p={2}>
        <Typography level="h1" sx={{ mb: 2, color: "#353130" }}>
          Vote Your Books
        </Typography>
        <Typography level="title-lg" sx={{ mb: 3, color: "#353130" }}>
          Select a book and choose 1, 2, or 3
        </Typography>

        <Box
          sx={{
            backgroundColor: "#89CFF0",
            padding: "40px",
            borderRadius: "12px",
            mt: 2,
            mb: 7,
          }}
        >
          <Droppable droppableId="selectedBooks" direction="horizontal">
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  backgroundColor: "#FDE0A2",
                  padding: "40px",
                  borderRadius: "12px",
                  display: "flex",
                  mt: 2,
                  mb: 7,
                  minHeight: "100px",
                  width: "100%",
                  justifyContent: "start",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  minHeight={300}
                  sx={{ "& > *": { width: 128, height: 192 } }}
                >
                  {selectedBooks.map((book, index) => (
                    <Draggable
                      key={book._id}
                      draggableId={book._id}
                      index={index}
                    >
                      {(provided) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <BookPreviewElement book={book} disableLink />
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Stack>
              </Box>
            )}
          </Droppable>

          <Droppable droppableId="availableBooks" direction="horizontal">
            {(provided) => (
              <Stack
                ref={provided.innerRef}
                {...provided.droppableProps}
                direction="row"
                spacing={2}
                minHeight={320}
                sx={{ "& > *": { width: 128, height: 192 } }}
              >
                {availableBooks.map((book, index) => {
                  // Return the Draggable component
                  return (
                    <Draggable
                      key={book._id}
                      draggableId={book._id}
                      index={index}
                    >
                      {(provided) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <BookPreviewElement book={book} disableLink />
                        </Box>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </Stack>
            )}
          </Droppable>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
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
              Done Voting
            </Button>
          </Box>
        </Box>
      </Box>
    </DragDropContext>
  );
}
