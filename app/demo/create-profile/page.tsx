"use client";

import { Button, Stack, Box, Typography, Checkbox, Input } from "@mui/joy";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";

interface ProfileData {
  userType?: string;
  displayName?: string;
  pronouns: string[];
  gender: string[];
  ethnicity: string[];
  customPronoun: string;
  customGender: string;
  customEthnicity: string;
  firstPlace: string;
  secondPlace: string;
  thirdPlace: string;
  readBooks: string[];
  wishlistBooks: string[];
  currentBooks: string[];
  unreadBooks: string[];
  updated?: Date;
}

const initialProfileData: ProfileData = {
  userType: "",
  displayName: "",
  pronouns: [],
  gender: [],
  ethnicity: [],
  customPronoun: "",
  customGender: "",
  customEthnicity: "",
  firstPlace: "",
  secondPlace: "",
  thirdPlace: "",
  readBooks: [],
  wishlistBooks: [],
  currentBooks: [],
  unreadBooks: [],
  updated: new Date(),
};

const steps = ["Name", "Pronouns", "Gender Identity", "Ethnicity", "Review"];

const PRONOUNS = ["He/Him", "She/Her", "They/Them"];
const GENDER_IDENTITY = ["Boy", "Girl", "Gender-fluid"];
const ETHNICITY = [
  "White",
  "Black",
  "Native American",
  "Asian (entire continent)",
  "Pacific Islander",
];

export default function CreateProfilePage(): JSX.Element {
  const router = useRouter();
  const [profileData, setProfileData] =
    useState<ProfileData>(initialProfileData);

  const [submittingForm, setSubmittingForm] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Form data:", profileData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Handles changes to form fields
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setProfileData((prevFormData) => {
      if (type === "checkbox") {
        if (checked) {
          return {
            ...prevFormData,
            [name]: Array.isArray(prevFormData[name as keyof ProfileData])
              ? [
                  ...(prevFormData[name as keyof ProfileData] as string[]),
                  value,
                ]
              : [value],
          };
        } else {
          return {
            ...prevFormData,
            [name]: (
              prevFormData[name as keyof ProfileData] as string[]
            ).filter((item) => item !== value),
          };
        }
      } else {
        return {
          ...prevFormData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form is being submitted");
    if (submittingForm) return;

    setSubmittingForm(true);

    const profilePayload = {
      ...profileData,
      username: "demoUser",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HTTPS_ENDPOINT}/demo/profile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profilePayload),
        }
      );

      const data = await response.json();

      if (data.success) {
        // profile updated successfully-save it to localStorage
        localStorage.setItem("userProfile", JSON.stringify(profilePayload));
        // redirect to browse page
        router.push("/demo/browse");
      } else {
        console.error("Failed to update profile:", data.error);
      }
    } catch (error) {
      console.error("There was an error submitting the profile:", error);
    } finally {
      // end the submission process regardless of the outcome
      setSubmittingForm(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <Typography level="h2" marginBottom={1} marginTop={2}>
        Create Your Profile
      </Typography>

      {currentStep === 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography level="h4" marginBottom={1} marginTop={2}>
            Your Preferred Name (the name you want to be called by):
          </Typography>

          <Input
            id="displayName"
            name="displayName"
            value={profileData.displayName}
            onChange={handleChange}
            placeholder="Name"
          />
          <Button onClick={handleNext} sx={{ mt: 4 }}>
            Next
          </Button>
        </Box>
      )}

      {currentStep === 1 && (
        <Box sx={{ mb: 2 }}>
          <Typography level="h4" marginBottom={1} marginTop={2}>
            Select Your Preferred Pronouns (You can select multiple) :
          </Typography>
          {PRONOUNS.map((pronoun) => (
            <Stack
              key={pronoun}
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <Checkbox
                id={`pronouns-${pronoun}`}
                checked={profileData.pronouns.includes(pronoun)}
                onChange={handleChange}
                name="pronouns"
                value={pronoun}
              />
              <Typography>{pronoun}</Typography>
            </Stack>
          ))}
          <Input
            id="customPronoun"
            name="customPronoun"
            value={profileData.customPronoun}
            onChange={handleChange}
            placeholder="Write your own pronouns here!"
          />

          <Stack direction="row" spacing={2} marginTop={2}>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
          </Stack>
        </Box>
      )}

      {currentStep === 2 && (
        <Box sx={{ mb: 2 }}>
          <Typography level="h4" marginBottom={1} marginTop={2}>
            Select your gender, if you would like (You can select multiple):
          </Typography>
          {GENDER_IDENTITY.map((gender) => (
            <Stack key={gender} direction="row" alignItems="center" spacing={1}>
              <Checkbox
                id={`gender_identity-${gender}`}
                checked={profileData.gender.includes(gender)}
                onChange={handleChange}
                name="gender"
                value={gender}
              />
              <Typography>{gender}</Typography>
            </Stack>
          ))}
          <Input
            id="customGender"
            name="customGender"
            value={profileData.customGender}
            onChange={handleChange}
            placeholder="Write your own gender here!"
          />
          <Stack direction="row" spacing={2} marginTop={2}>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
          </Stack>
        </Box>
      )}

      {currentStep === 3 && (
        <Box sx={{ mb: 2 }}>
          <Typography level="h4" marginBottom={1} marginTop={2}>
            Select your ethnicity, if you would like! (You can select multiple):
          </Typography>
          {ETHNICITY.map((ethnicity) => (
            <Stack
              key={ethnicity}
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <Checkbox
                id={`ethnicity-${ethnicity}`}
                checked={profileData.ethnicity.includes(ethnicity)}
                onChange={handleChange}
                name="ethnicity"
                value={ethnicity}
              />
              <Typography>{ethnicity}</Typography>
            </Stack>
          ))}
          <Input
            id="customEthnicity"
            name="customEthnicity"
            value={profileData.customEthnicity}
            onChange={handleChange}
            placeholder="Write your ethnicity here!"
          />
          <Stack direction="row" spacing={2} marginTop={2}>
            <Button variant="outlined" onClick={handleBack}>
              Back
            </Button>
            <Button variant="solid" onClick={handleNext}>
              Next
            </Button>
          </Stack>
        </Box>
      )}

      {currentStep === 4 && (
        <Box>
          <Typography level="h4" marginBottom={1} marginTop={2}>
            How Does Your Profile Look?
          </Typography>
          {/* Display the selected options and custom inputs from previous steps */}
          <Typography>Name: {profileData.displayName}</Typography>
          <Typography>
            Pronouns: {profileData.pronouns.join(", ")}{" "}
            {profileData.customPronoun}
          </Typography>
          <Typography>
            Gender: {profileData.gender.join(", ")} {profileData.customGender}
          </Typography>
          <Typography>
            Ethnicity: {profileData.ethnicity.join(", ")}{" "}
            {profileData.customEthnicity}
          </Typography>
          <Stack direction="row" spacing={2} marginTop={3}>
            <Button onClick={handleBack}>Edit</Button>
            <Button type="submit" disabled={submittingForm}>
              {/* <Button component={NextLink} href="/demo/learn-more"> */}
              Save Profile
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
