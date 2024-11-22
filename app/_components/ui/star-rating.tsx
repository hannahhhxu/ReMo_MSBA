"use client";

import { Stack } from "@mui/joy";
import Box from "@mui/joy/Box";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

interface StarRatingProps {
  value?: number;
  setValue?: Dispatch<SetStateAction<number>>;
}

export function StarRating(props: StarRatingProps): JSX.Element {
  const { value, setValue } = props;
  const [rating, setRating] = useState<number>(value ? value : 0);
  const [hover, setHover] = useState<number>(0);

  useEffect(() => {
    if (setValue) {
      setValue(rating);
    }
  }, [rating, setValue]);

  return (
    <Stack direction="row">
      {[0.2, 0.4, 0.6, 0.8, 1.0].map((v) => {
        return (
          <Box
            key={`rating${v}`}
            onClick={() => {
              setRating(v);
            }}
            onMouseEnter={() => {
              setHover(v);
            }}
            onMouseLeave={() => {
              setHover(rating);
            }}
            sx={{ cursor: "pointer" }}>
            {rating >= v || hover >= v ? <FaStar /> : <FaRegStar />}
          </Box>
        );
      })}
    </Stack>
  );
}
