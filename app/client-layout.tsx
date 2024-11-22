"use client";
import React, { useContext, useEffect, useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

import { Container, Box } from "@mui/joy";

import { IconContext } from "react-icons";
import { type PropsWithChildren } from "react";
import Navbar from "@/components/site/navbar";
import NavbarLoggedOut from "@/components/site/navbar-logged-out";
import ThemeProvider from "@/contexts/theme";
import Footer from "@/components/site/footer";
import { usePathname } from "next/navigation";

export default function ClientLayout(props: PropsWithChildren): JSX.Element {
  const { children } = props;
  const [hasProfile, setHasProfile] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const checkForUserProfile = () => {
      const profileString = localStorage.getItem("userProfile");
      setHasProfile(!!profileString);
    };

    checkForUserProfile();
  }, [path]);

  const NavbarToUse = hasProfile ? Navbar : NavbarLoggedOut;

  return (
    <Box sx={{ bgcolor: path === "/" ? "#65298b" : "#FFFFFF" }}>
      <ThemeProvider>
        <LazyMotion features={domAnimation}>
          <NavbarToUse />
          <IconContext.Provider
            value={{
              style: {
                width: "36px",
                height: "36px",
                color: "#434343",
              },
            }}
          >
            <Container>
              <Box pt={3}>{children}</Box>
            </Container>
            <Footer />
          </IconContext.Provider>
        </LazyMotion>
      </ThemeProvider>
    </Box>
  );
}
