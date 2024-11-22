import React from "react";
import { Box, Typography, Alert } from "@mui/joy";

interface SubmissionStatusPageProps {
  success: boolean;
}

export default function SubmissionStatusPage(
  props: SubmissionStatusPageProps
): JSX.Element {
  const { success } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        p: 4,
      }}
    >
      {success ? (
        <>
          <Typography level="h2" sx={{ mt: 2 }}>
            Thank You!
          </Typography>
          <Typography level="h4" sx={{ mt: 2 }}>
            Your submission has been received.
          </Typography>
          <Typography level="body-md" sx={{ mt: 2 }}>
            We appreciate you taking the time to provide feedback. We will
            review your submission and follow up if necessary. Have a great day!
          </Typography>
        </>
      ) : (
        <>
          <Typography level="h2" sx={{ mt: 2 }}>
            Oops, something went wrong.
          </Typography>
          <Typography level="h4" sx={{ mt: 2 }}>
            Submission Failed
          </Typography>
          <Typography level="body-md" sx={{ mt: 2 }}>
            We were unable to receive your submission at this time. Please try
            again later or contact support if the issue persists.
          </Typography>
        </>
      )}
    </Box>
  );
}
