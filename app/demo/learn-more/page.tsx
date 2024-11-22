"use client";

import {
  Box,
  Typography,
  Input,
  FormControl,
  Radio,
  RadioGroup,
  Button,
  Textarea,
} from "@mui/joy";

import {
  SentimentVeryDissatisfied,
  SentimentSatisfied,
  SentimentDissatisfied,
  CalendarToday,
} from "@mui/icons-material";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import React, { useState, useEffect } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  schoolName: string;
  libraryName: string;
  districtName: string;
  schoolOrLibrary: string;
  participatedBefore: string;
  yearsParticipated: string;
  easeOfParticipation: string;
  enjoymentRating: string;
  frustratingPart: string;
  rewardingPart: string;
  recommendParticipation: string;
  otherThoughts: string;
  feedbackSession: string;
  introductionMonth: Date | null;
}

export default function DemoLearnMorePage(): JSX.Element {
  // Create a state to hold form data
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    schoolName: "",
    libraryName: "",
    districtName: "",
    schoolOrLibrary: "",
    participatedBefore: "",
    yearsParticipated: "",
    easeOfParticipation: "",
    enjoymentRating: "",
    frustratingPart: "",
    rewardingPart: "",
    recommendParticipation: "",
    otherThoughts: "",
    feedbackSession: "",
    introductionMonth: null,
  });

  // Handle the date picker value
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  // Handle form field changes
  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      introductionMonth: date,
    }));
    setStartDate(date);
  };

  const [submitForm, setSubmitForm] = useState<boolean>(false);
  const [submittingForm, setSubmittingForm] = useState<boolean>(false);

  useEffect(() => {
    const processForm = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HTTPS_ENDPOINT}/recordSurvey`,
        {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status !== 200) {
        // there was a server error of some sorts
      } else {
        // there was not a server error, but c was a success
        const successData = await response.json();
        console.log(successData);
      }
      setSubmitForm(false);
      setSubmittingForm(false);
    };

    if (submitForm && !submittingForm) {
      setSubmittingForm(true);
      processForm();
    }
  }, [submitForm]);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData); // Submit data to server or handle it as needed
    setSubmitForm(true);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={2}>
      <Typography level="h1" sx={{ color: "#353130" }}>
        Learn More
      </Typography>

      <Typography level="title-lg" sx={{ mt: 3, mb: 2, color: "#353130" }}>
        Please complete this form to learn more about how you can use ReMo to
        empower MSBA reading in your classroom or library!
      </Typography>

      <Box
        sx={{
          backgroundColor: "#Ffc2b6",
          padding: "20px",
          borderRadius: "12px",
          mb: 10,
        }}
      >
        {/* Name input */}
        <Typography level="body-lg" mb={0.5} mt={2}>
          First name
        </Typography>
        <Input
          name="firstName"
          sx={{
            width: 256,
            "--Input-focusedThickness": "0.16rem",
            "--Input-focusedHighlight": "primary",
          }}
          onChange={handleChange}
          required
        />
        <FormControl sx={{ mb: 2 }}>
          <Typography level="body-lg" mb={0.5} mt={1}>
            Last Name
          </Typography>
          <Input
            name="lastName"
            sx={{
              width: 256,
              "--Input-focusedThickness": "0.16rem",
              "--Input-focusedHighlight": "primary",
            }}
            onChange={handleChange}
            required
          />
        </FormControl>

        {/* Email input */}
        <FormControl sx={{ mb: 2 }}>
          <Typography level="body-lg" mb={0.5} mt={1}>
            Email address
          </Typography>
          <Input
            name="email"
            sx={{
              width: 256,
              "--Input-focusedThickness": "0.16rem",
              "--Input-focusedHighlight": "primary",
            }}
            type="email"
            onChange={handleChange}
            required
          />
        </FormControl>

        {/* School or Library */}
        <FormControl sx={{ my: 2 }}>
          <Typography level="body-lg" mb={0.5} mt={2}>
            Do you work at a school, school library, or public library?
          </Typography>
          <RadioGroup name="schoolOrLibrary" onChange={handleChange}>
            <Radio value="school" label="School" variant="outlined" />
            <Radio
              value="schoolLibrary"
              label="School Library"
              variant="outlined"
            />
            <Radio value="library" label="Public Library" variant="outlined" />
          </RadioGroup>
        </FormControl>

        {/* School Name and District Name input */}
        {/* Only display if they work at a school -- either in a classroom or the school library */}
        {formData.schoolOrLibrary === "school" && (
          <>
            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mb={0.5} mt={2}>
                School name
              </Typography>
              <Input
                name="schoolName"
                sx={{
                  width: 256,
                  "--Input-focusedThickness": "0.16rem",
                  "--Input-focusedHighlight": "primary",
                }}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mb={0.5} mt={2}>
                District name
              </Typography>
              <Input
                name="districtName"
                sx={{
                  width: 256,
                  "--Input-focusedThickness": "0.16rem",
                  "--Input-focusedHighlight": "primary",
                }}
                onChange={handleChange}
                required
              />
            </FormControl>
          </>
        )}

        {/* School Name and District Name input */}
        {/* Only display if they work at a school -- either in a classroom or the school library */}
        {formData.schoolOrLibrary === "schoolLibrary" && (
          <>
            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mb={0.5} mt={2}>
                School name
              </Typography>
              <Input
                name="schoolName"
                sx={{
                  width: 256,
                  "--Input-focusedThickness": "0.16rem",
                  "--Input-focusedHighlight": "primary",
                }}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mb={0.5} mt={2}>
                District name
              </Typography>
              <Input
                name="districtName"
                sx={{
                  width: 256,
                  "--Input-focusedThickness": "0.16rem",
                  "--Input-focusedHighlight": "primary",
                }}
                onChange={handleChange}
                required
              />
            </FormControl>
          </>
        )}

        {/* Library Name input */}
        {/* Only display if they work at a public library */}
        {formData.schoolOrLibrary === "library" && (
          <FormControl sx={{ my: 2 }}>
            <Typography level="body-lg" mb={0.5} mt={2}>
              Library name
            </Typography>
            <Input
              name="libraryName"
              sx={{
                width: 256,
                "--Input-focusedThickness": "0.16rem",
                "--Input-focusedHighlight": "primary",
              }}
              onChange={handleChange}
              required
            />
          </FormControl>
        )}

        {/* Position input */}
        <FormControl sx={{ my: 2 }}>
          <Typography level="body-lg" mb={0.5} mt={2}>
            Position
          </Typography>
          <RadioGroup name="position" onChange={handleChange}>
            <Radio
              value="classroomTeacher"
              label="Classroom Teacher"
              variant="outlined"
            />
            <Radio
              value="schoolLibrarian"
              label="School Librarian"
              variant="outlined"
            />
            <Radio
              value="publicLibrarian"
              label="Public Librarian"
              variant="outlined"
            />
            <Radio
              value="libraryAssistant"
              label="Library Assistant"
              variant="outlined"
            />
            <Radio value="other" label="Other" variant="outlined" />
            {formData.position === "other" && (
              <Input
                name="positionOther"
                placeholder="Please specify"
                sx={{
                  mt: 2,
                  width: 256,
                  "--Input-focusedThickness": "0.16rem",
                  "--Input-focusedHighlight": "primary",
                }}
                onChange={handleChange}
                required
              />
            )}
          </RadioGroup>
        </FormControl>

        {/* Participation Yes/No */}
        <FormControl sx={{ my: 2 }}>
          <Typography level="body-lg" mb={0.5} mt={2}>
            Have you participated in the MSBA Program before?
          </Typography>
          <RadioGroup name="participatedBefore" onChange={handleChange}>
            <Radio value="yes" label="Yes" variant="outlined" />
            <Radio value="no" label="No" variant="outlined" />
          </RadioGroup>
        </FormControl>

        {/* Years Participated input */}
        {/* Only display if they have participated before */}
        {formData.participatedBefore === "yes" && (
          <>
            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mb={0.5} mt={2}>
                If yes, how many years have you participated in the MSBA
                Program?
              </Typography>
              <RadioGroup name="yearsParticipated" onChange={handleChange}>
                <Radio value="1" label="1 year" variant="outlined" />
                <Radio value="2-4" label="2-4 years" variant="outlined" />
                <Radio value="5-9" label="5-9 years" variant="outlined" />
                <Radio
                  value="10+"
                  label="10 years or more"
                  variant="outlined"
                />
              </RadioGroup>
            </FormControl>

            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mt={2}>
                How easy was participating in the MSBA for you in the past?{" "}
              </Typography>
              <RadioGroup name="easeOfParticipation" onChange={handleChange}>
                <Radio
                  value="1"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <SentimentVeryDissatisfied sx={{ mr: 1 }} />
                      <Typography>
                        1 - very time consuming/difficult/confusing
                      </Typography>
                    </Box>
                  }
                />
                <Radio
                  value="2"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <SentimentDissatisfied sx={{ mr: 1 }} />
                      <Typography>
                        2 - it took some time to figure out and implement
                      </Typography>
                    </Box>
                  }
                />
                <Radio
                  value="3"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <SentimentSatisfied sx={{ mr: 1 }} />
                      <Typography>3 - super easy/fast/simple</Typography>
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>

            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mt={2}>
                Rate your enjoyment of participating in the MSBA?
              </Typography>
              <RadioGroup name="enjoymentRating" onChange={handleChange}>
                <Radio
                  value="1"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <SentimentVeryDissatisfied sx={{ mr: 1 }} />
                      <Typography>1 - not enjoyable at all</Typography>
                    </Box>
                  }
                />
                <Radio
                  value="2"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <SentimentDissatisfied sx={{ mr: 1 }} />
                      <Typography>2 - it was ok</Typography>
                    </Box>
                  }
                />
                <Radio
                  value="3"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <SentimentSatisfied sx={{ mr: 1 }} />
                      <Typography>3 - it was amazing!</Typography>
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>

            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mb={0.5} mt={2}>
                What was the most frustrating part of participating in the MSBA?
              </Typography>
              <Textarea
                name="frustratingPart"
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mb={0.5} mt={2}>
                What was the most rewarding part of participating in the MSBA?
              </Typography>
              <Textarea name="rewardingPart" onChange={handleChange} required />
            </FormControl>

            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mb={0.5} mt={2}>
                Would you recommend participating in the MSBA to others?
              </Typography>
              <RadioGroup name="recommendParticipation" onChange={handleChange}>
                <Radio value="yes" label="Yes" variant="outlined" />
                <Radio value="no" label="No" variant="outlined" />
                <Radio value="maybe" label="Maybe" variant="outlined" />
              </RadioGroup>
            </FormControl>

            <FormControl sx={{ my: 2 }}>
              <Typography level="body-lg" mb={0.5} mt={2}>
                Any other thoughts around the MSBA?
              </Typography>
              <Textarea name="otherThoughts" onChange={handleChange} required />
            </FormControl>
          </>
        )}

        <FormControl sx={{ my: 2 }}>
          <Typography level="body-lg" mb={0.5} mt={2}>
            What date (month) will you be introducing the new MSBA list to
            students/readers in your school/library?
          </Typography>
          <Box sx={{ position: "relative" }}>
            <ReactDatePicker
              selected={formData.introductionMonth}
              onChange={(date) =>
                setFormData({ ...formData, introductionMonth: date })
              }
              dateFormat="MM/dd/yyyy"
              minDate={new Date("2024-04-03")}
              maxDate={new Date("2030-12-31")}
              placeholderText="Select a date"
            />
            <CalendarToday
              sx={{
                position: "absolute",
                right: "905px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            />
          </Box>
        </FormControl>

        <FormControl sx={{ my: 2 }}>
          <Typography level="body-lg" mt={2}>
            Would you be willing to participate in a 1:1 session to provide
            feedback about your experience to help improve the MSBA and its app
          </Typography>
          <Typography level="body-md" mt={0.5} mb={1}>
            (virtual and in-person options are available; 10-20 minute
            timeframe)
          </Typography>
          <RadioGroup name="feedbackSession" onChange={handleChange}>
            <Radio value="yes" label="Yes" variant="outlined" />
            <Radio value="no" label="No" variant="outlined" />
            <Radio value="maybe" label="Maybe" variant="outlined" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" size="sm" sx={{ mt: 4, mb: 3 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}
