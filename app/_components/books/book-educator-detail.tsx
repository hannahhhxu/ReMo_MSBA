"use client";

import { Box, Chip, Divider, Grid, Typography } from "@mui/joy";
import type { BookMeta } from "@/types/book-meta";
import { ChipSet } from "./book-topics";

interface BookEducatorDetailProps {
  bookMeta?: BookMeta;
}

export function BookEducatorDetail(
  props: BookEducatorDetailProps
): JSX.Element {
  const { bookMeta } = props;

  if (!bookMeta) {
    return <div />;
  }
  const {
    pubDate = "N/A",
    publisher = ["N/A"],
    contentWarning = ["N/A"],
    lexileLevel = "",
    guidedReadingLevel = "N/A",
    hasMultiplePov = false,
    hasUnreliableNarrative = false,
    language = ["N/A"],
    languageRegister = ["N/A"],
    literaryDevices = ["N/A"],
    modesOfWriting = ["N/A"],
    pointOfView = ["N/A"],
    textFeatures = ["N/A"],
    textStructure = ["N/A"],
    voice = ["N/A"],
    awards = ["N/A"],
    internationalAwards = ["N/A"],
    characterEthnicity = ["N/A"],
    characterGenderIdentity = ["N/A"],
    characterRaceCulture = ["N/A"],
    characterReligion = ["N/A"],
    characterSexualOrientation = ["N/A"],
  } = bookMeta;

  const hasCharacterInfo =
    characterEthnicity?.length ||
    characterGenderIdentity?.length ||
    characterRaceCulture?.length ||
    characterReligion?.length ||
    characterSexualOrientation?.length;

  const hasBookFeatures =
    language?.length ||
    languageRegister?.length ||
    literaryDevices?.length ||
    modesOfWriting?.length ||
    pointOfView?.length ||
    textFeatures?.length ||
    textStructure?.length ||
    voice?.length;

  return (
    <Grid container spacing={2}>
      <Grid sm={4} xs={12}>
        <Box mb={2}>
          <Typography level="h4">Details</Typography>
          <Divider />
        </Box>
        <Box mb={2}>
          <Typography level="body-lg">Publication date:</Typography>{" "}
          {pubDate ? <Chip>{pubDate}</Chip> : null}
        </Box>
        <Box mb={2}>
          <ChipSet data={publisher} subtitle="Publisher" />
        </Box>
        <Box mb={2}>
          <ChipSet data={contentWarning} subtitle="Content warning" />
        </Box>
        <Box mb={2}>
          <Typography level="body-lg">Guided Reading Level:</Typography>
          {guidedReadingLevel ? <Chip>{guidedReadingLevel}</Chip> : null}
        </Box>
        <Box mb={2}>
          <Typography level="body-lg">Lexile Level:</Typography>
          {lexileLevel && lexileLevel !== "0" ? (
            <Chip>{lexileLevel}</Chip>
          ) : null}
        </Box>
        <Box mb={2}>
          <Typography level="body-lg">
            Multiple POV: {hasMultiplePov}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography level="body-lg">
            Unreliable Narrator: {hasUnreliableNarrative}
          </Typography>
        </Box>
      </Grid>
      <Grid sm={4} xs={12}>
        <Box mb={2}>
          <Typography level="h4">Book Features</Typography>
          <Divider />
        </Box>
        <Box mb={2}>
          <ChipSet data={language} subtitle="Language" />
        </Box>
        <Box mb={2}>
          <ChipSet data={languageRegister} subtitle="Language Register" />
        </Box>
        <Box mb={2}>
          <ChipSet data={literaryDevices} subtitle="Literary Devices" />
        </Box>
        <Box mb={2}>
          <ChipSet data={modesOfWriting} subtitle="Modes of Writing" />
        </Box>
        <Box mb={2}>
          <ChipSet data={pointOfView} subtitle="Point of View" />
        </Box>
        <Box mb={2}>
          <ChipSet data={textFeatures} subtitle="Text Features" />
        </Box>
        <Box mb={2}>
          <ChipSet data={textStructure} subtitle="Text Structure" />
        </Box>
        <Box mb={2}>
          <ChipSet data={voice} subtitle="Voice" />
        </Box>
      </Grid>
      <Grid sm={4} xs={12}>
        {awards?.length || internationalAwards?.length ? (
          <Box mb={2}>
            <Box mb={2}>
              <Typography level="h4">Awards</Typography>
              <Divider />
            </Box>
            <Box mb={2}>
              <ChipSet data={awards} subtitle="US" />
            </Box>
            <Box mb={2}>
              <ChipSet data={internationalAwards} subtitle="International" />
            </Box>
          </Box>
        ) : null}
        <Box mb={2}>
          <Box mb={2}>
            <Typography level="h4">Character information</Typography>
            <Divider />
          </Box>
          {hasCharacterInfo ? (
            <>
              <Box mb={2}>
                <ChipSet data={characterEthnicity} subtitle="Ethnicity" />
              </Box>
              <Box mb={2}>
                <ChipSet
                  data={characterRaceCulture}
                  subtitle="Race & Culture"
                />
              </Box>
              <Box mb={2}>
                <ChipSet data={characterReligion} subtitle="Religion" />
              </Box>
              <Box mb={2}>
                <ChipSet
                  data={characterSexualOrientation}
                  subtitle="Sexual Orientation"
                />
              </Box>
              <Box mb={2}>
                <ChipSet
                  data={characterGenderIdentity}
                  subtitle="Gender Identity"
                />
              </Box>
            </>
          ) : (
            <Chip>None</Chip>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
