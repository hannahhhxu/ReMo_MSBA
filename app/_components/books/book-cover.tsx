"use client";

import { AspectRatio, Box, LinearProgress, Typography } from "@mui/joy";
import NextLink from "next/link";
import Image from "next/image";
import { useState } from "react";

export const BLUR_UP =
  "data:image/iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAIAAAAQS2/OAAAEB0lEQVR4AaSWB5OjOBCFkXCaHDfvVrr9//9mKmzO2RMBR+A+9CgGW8i+8MpoNK1Wv04SmB8/fkRRVJZl1IYkHowxW1Y99Pw1NvNvHMeatMeiKBpNCduUWvUIPFhrl8vl9fX1zs5OlmV7e3uMg8GA/UgWDtIZjUaMs9kMb/r9Ppp+ZLYzM3mev3///tu3b2z78OED+3/+/PnmzRuWIGZMkgQd0ovO7e3t58+fkcPqExiU/FSyeTwe7+7u4ixuzudzJQQJc1axhSb0KBAZEpaIj8m6NVzzg0CPnBA7GcB9mc6XeVEWKg8KmizBYjEYDqfTaWxtfzBAeWMNXJU+ffpkHY5Pjr98+fL4yeMyLV+/eXNycpImCTFhmoyTll6vd31z8/jRI5L26NEjmNYIzK9fvywSEzViQkZ7Op0RDEkw1u7v76dJmmUplKwiiV2RXTJBMRwO+HN2fj4aDgtaq03w+/dvCBCJQBN2Yku5wln1XzORE6ziviZKbLN9PUWFWxBtXumViDCtgjtPsVhLBOPWKPjaGYINz1YIYqw5WrSWmLAGDSN/5I4x8q2NslWw1ZTbRZ73MBG7li1bJ3lJR+7uHB4dRf8PNO7VeAyBiQwMNjf1eYOw1+8rmy5NWyAHfdAXOjRatNjXrzTkSpAkaBco6E4laLGTix8CBv2IR9XZaldV5WSpyGuAFqwUOaf6koTzoj00Upqmd3d3Gl+8ePHw4cP2neqjtzkhQM4mIE0W84VOBof58PCQQ6B/ozB6uTsbJuA7h4CbknsJK/t7+/bAguaFMXPgmtpEoBZSkf1AsHVzcyOXdx1oEmssmrrvaEqpMff2Vk9PZ5yn4PEgT7FCPXW19Qd9ruWD/QPAql+2Fl9ZQFDbNSLq1sbhKjNxjMZiNp9mk/HvP5CdgfPzzl3NrdVj1og6rKudNRi1g4l7/dqEI+7cdU9AGZu3WNQFrOTOtIVjLVZTwf+eUHepHeoIdLi33A3G/zwwhBBKkUKpI8DFZc6kGyZQHMx3LimC0qGnbpM06HtASAQh9/Fb5akImhoEshREFYEJcmisCTZHYAJJIgJOSad1zo2W6hqETiPICyIrjI2VFvQafWtjf4uWMMvYpCj4PYsXnNjkLlkuqg3WoWlNdVGoBq0uCgNzL/96yVUxyTJokrs7btbKOzarv3nCBK0IwkGAPjg60ut6Np2mWQWuJhvHa7nVnFHNuSUCn5g9w9GI3+np6ZPHT+Q/ws4IkK90EdmgW2RuM5NGG1tfuYlGVwUE93cRk/livhvtsrCt/c3mJRJ4T6AIFM7FxcXTp0+l9N/AXt7VfO9iXZ1aE2jt6uqKT9X/Q6BWpidkdoVA6eM1Ev1vtBtH13W4Tf83bPn3aAwAwr2+WJxhyu4AAAAASUVORK5CYII=";

interface BookCoverProps {
  image: string;
  title: string;
  href?: string;
  progress?: number;
}

export function BookCover(props: BookCoverProps): JSX.Element {
  const { image, title, href = "", progress } = props;
  const [imageError, setImageError] = useState(false);

  const displayImage = image ? image : "https://cdn.remo.app/not-found.jpg";
  const percent = progress
    ? Math.max(Math.min(Math.round(progress), 100), 0)
    : 0;

  const progressElement = (
    <LinearProgress
      color="primary"
      determinate
      size="sm"
      sx={{
        "--LinearProgress-radius": "0px",
        boxShadow: "sm",
        borderColor: "primary.500",
      }}
      thickness={32}
      value={percent}
      variant="soft"
    >
      <Typography
        fontWeight="xl"
        level="body-lg"
        sx={{ mixBlendMode: "multiply" }}
        textColor="common.black"
      >
        {`${percent}%`}
      </Typography>
    </LinearProgress>
  );

  const borderRadius =
    progress !== undefined && progress > 0 ? "10px 10px 0px 0px" : "10px";
  return href?.length ? (
    <Box>
      <AspectRatio
        component={NextLink}
        href={href}
        prefetch={false}
        ratio="2/3"
        sx={(theme) => ({
          width: "100%",
          padding: "8px",
          backgroundColor: theme.vars.palette.neutral[200],
          borderRadius,
          cursor: "pointer",
        })}
      >
        <Image
          alt={title}
          blurDataURL={BLUR_UP}
          fill
          onError={() => {
            setImageError(true);
          }}
          placeholder="blur"
          sizes="360px"
          src={imageError ? "https://cdn.remo.app/not-found.jpg" : displayImage}
          unoptimized
        />
      </AspectRatio>
      {progress !== undefined && progress > 0 ? progressElement : null}
    </Box>
  ) : (
    <Box>
      <AspectRatio
        ratio="2/3"
        sx={(theme) => ({
          width: "100%",
          padding: "8px",
          backgroundColor: theme.vars.palette.neutral[200],
          borderRadius,
          cursor: "pointer",
        })}
      >
        <Image
          alt={title}
          blurDataURL={BLUR_UP}
          fill
          onError={() => {
            setImageError(true);
          }}
          placeholder="blur"
          sizes="360px"
          src={imageError ? "https://cdn.remo.app/not-found.jpg" : displayImage}
          unoptimized
        />
      </AspectRatio>
      {progress !== undefined && progress > 0 ? progressElement : null}
    </Box>
  );
}
