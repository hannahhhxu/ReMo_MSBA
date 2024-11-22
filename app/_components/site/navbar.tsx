"use client";

import Box from "@mui/joy/Box";
import { IconContext } from "react-icons";
import { Button, IconButton, Stack, Typography } from "@mui/joy";
import { AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import { useContext, type ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineHowToVote } from "react-icons/md";
import { IoLibraryOutline, IoSearchSharp } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";

interface NavbarButtonProps {
  link: string;
  text: string;
  icon?: ReactNode | null;
  showMobileText?: boolean;
}

function NavbarButton(props: NavbarButtonProps): JSX.Element {
  const { link = "", icon = null, text = "", showMobileText = false } = props;

  return showMobileText ? (
    <Button
      color="primary"
      component={NextLink}
      href={link}
      prefetch={false}
      startDecorator={icon}
      sx={{ height: 44 }}
      variant="soft"
    >
      <Typography level="body-lg">{text}</Typography>
    </Button>
  ) : (
    <>
      <IconButton
        color="primary"
        component={NextLink}
        href={link}
        prefetch={false}
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
          height: 44,
        })}
        variant="soft"
      >
        {icon}
      </IconButton>
      <Button
        color="primary"
        component={NextLink}
        href={link}
        prefetch={false}
        startDecorator={icon}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
          height: 44,
        })}
        variant="soft"
      >
        <Typography level="body-lg">{text}</Typography>
      </Button>
    </>
  );
}

export default function Navbar(): JSX.Element {
  return (
    <Box
      component="header"
      padding={1}
      sx={[
        {
          bgcolor: "background.surface",
          borderBottom: "1px solid",
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1100,
          width: "100%",
        },
      ]}
    >
      <IconContext.Provider
        value={{ style: { width: "28px", height: "28px", color: "#000" } }}
      >
        <AnimatePresence initial={false}>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
          >
            <Box
              key="navbarLeft"
              sx={(theme) => ({
                display: "flex",
                flexDirection: "row",
                gap: 3,
                [theme.breakpoints.down("md")]: {
                  gap: 1,
                },
              })}
            >
              <Box
                sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                })}
              >
                <NextLink href="/" prefetch={false}>
                  <Image
                    alt="ReMo logo"
                    height="65"
                    src="/msba-logo.png"
                    width="80"
                  />
                </NextLink>
              </Box>

              <Stack direction="row" alignItems="center" spacing={2}>
                <NavbarButton
                  icon={<IoLibraryOutline />}
                  link="/demo/browse"
                  text="See the list"
                />
                <NavbarButton
                  icon={<MdOutlineHowToVote />}
                  link="/demo/vote"
                  text="Vote for winners"
                />
                <NavbarButton
                  icon={<PiStudent />}
                  link="/demo/classroom"
                  text="View your classroom"
                />
                <NavbarButton
                  icon={<IoSearchSharp />}
                  link="/demo/learn-more"
                  text="Learn more"
                />
              </Stack>
            </Box>

            <Box key="navbarRight"></Box>
          </Stack>
        </AnimatePresence>
      </IconContext.Provider>
    </Box>
  );
}
