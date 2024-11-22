"use client";

import { Box, Button, Typography, Input } from "@mui/joy";
import NextLink from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface DemoUser {
  id: string;
  username: string;
  email: string;
}

export default function MSBAHomePage(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [demoUser, setDemoUser] = useState<DemoUser | null>(null);
  const router = useRouter();

  const createDemoUser = () => {
    setTimeout(() => {
      // Mock user object
      const mockUser: DemoUser = {
        id: "demoUserId",
        username: "demoUser",
        email: "demo@example.com",
      };

      localStorage.setItem("demoUser", JSON.stringify(mockUser));
      console.log("User created and saved to localStorage");

      setDemoUser(mockUser);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    createDemoUser();
  }, []);

  const handleGetStartedClick = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HTTPS_ENDPOINT}/demo/profile`,
        {
          cache: "no-store",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (response.ok && data.success) {
        // redirect to browse if profile exists
        
        router.push("/demo/browse");
      } else {
        // redirect to create-profile if no profile exists
        router.push("/demo/create-profile");
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };

  return (
    <Box
      p={2}
      sx={{
        bgcolor: "#65298b",
        minHeight: "80vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography level="h1" sx={{ textAlign: "center", color: "#FFFFFF" }}>
        Welcome to the Maine Student Book Award!
      </Typography>
      <Box sx={{ maxWidth: 560, mx: "auto", my: 2 }}>
        <Typography
          level="title-md"
          marginTop={2}
          sx={{ textAlign: "left", color: "#FFFFFF" }}
        >
          The Maine Student Book Award{"'"}s mission is to expand the literary
          horizons of students by encouraging them to read, evaluate, and enjoy
          a selection of new books and to choose a statewide favorite by ballot
          each spring. The MSBA List of nominated books is built by a committee
          comprised of four public librarians, four school librarians, and four
          elementary/middle grade teachers. Together, these twelve members read
          hundreds of books over the calendar year in an effort to narrow down
          the nominees to the best of the best for readers in grades 4-8.
        </Typography>
        <Typography marginTop={2} sx={{ textAlign: "left", color: "#FFFFFF" }}>
          Thank you for being a part of committee to select the book list for
          2024-2025. Happy Reading!
        </Typography>
      </Box>
      <Box marginTop={2}>
        <Button
          onClick={handleGetStartedClick}
          size="lg"
          sx={{
            mt: 5,
            backgroundColor: "#f05a22",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#c997d2",
            },
          }}
        >
          Get Started!
        </Button>
      </Box>
    </Box>
  );
}
