import { Button, Grid, Typography } from "@mui/joy";
import { Dispatch, SetStateAction } from "react";

interface GridButtonProps {
  questionValue: string;
  setQuestionValue: Dispatch<SetStateAction<string>>;
  buttonValue: string;
  buttonText: string;
}

export function GridButton(props: GridButtonProps): JSX.Element {
  const { questionValue, setQuestionValue, buttonValue, buttonText } = props;
  return (
    <Grid sm={4} xs={12}>
      <Button
        color={questionValue === buttonValue ? "success" : "neutral"}
        fullWidth
        onClick={() => {
          setQuestionValue(buttonValue);
        }}
        size="lg"
        variant="soft"
      >
        <Typography level="body-md">{buttonText}</Typography>
      </Button>
    </Grid>
  );
}
