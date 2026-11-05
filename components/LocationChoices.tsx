import { Box, Button, Link as MuiLink, Typography } from "@mui/material";
import NextLink from "next/link";
import {
  LAS_VEGAS_BOOKING_HREF,
  LAS_VEGAS_BOOK_LABEL,
  LAS_VEGAS_CALL_LABEL,
  LAS_VEGAS_EMAIL,
  LAS_VEGAS_TEL_HREF,
  ORLANDO_BOOKING_HREF,
  ORLANDO_BOOK_LABEL,
  ORLANDO_CALL_LABEL,
  ORLANDO_EMAIL,
  ORLANDO_TEL_HREF,
} from "../lib/locationActions";

const locations = [
  {
    city: "Las Vegas",
    callHref: LAS_VEGAS_TEL_HREF,
    callLabel: LAS_VEGAS_CALL_LABEL,
    bookHref: LAS_VEGAS_BOOKING_HREF,
    bookLabel: LAS_VEGAS_BOOK_LABEL,
    email: LAS_VEGAS_EMAIL,
  },
  {
    city: "Orlando",
    callHref: ORLANDO_TEL_HREF,
    callLabel: ORLANDO_CALL_LABEL,
    bookHref: ORLANDO_BOOKING_HREF,
    bookLabel: ORLANDO_BOOK_LABEL,
    email: ORLANDO_EMAIL,
  },
] as const;

type LocationChoicesProps = {
  /** One column when the parent is narrow. Two columns from the md breakpoint. */
  columns?: 1 | 2;
  tone?: "light" | "dark";
};

const LocationChoices = ({ columns = 2, tone = "light" }: LocationChoicesProps) => {
  const dark = tone === "dark";

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        component="p"
        sx={{
          mb: 1.5,
          fontWeight: 800,
          textAlign: "center",
          color: dark ? "#FFFFFF" : "#067C92",
          fontSize: { xs: "1rem", sm: "1.05rem" },
        }}
      >
        Choose a city to call or book
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: columns === 1 ? "1fr" : { xs: "1fr", md: "1fr 1fr" },
          gap: 2,
          width: "100%",
          alignItems: "stretch",
        }}
      >
        {locations.map((location, index) => {
          const orlando = index === 1;
          return (
            <Box
              key={location.city}
              component="section"
              aria-label={`${location.city}: call, book, and email`}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.25,
                textAlign: "left",
                p: { xs: 2, sm: 2.5 },
                borderRadius: "20px",
                border: "2px solid",
                borderColor: dark
                  ? orlando
                    ? "#A1E0E3"
                    : "#FFFFFF"
                  : orlando
                    ? "#0AC3E6"
                    : "#067C92",
                bgcolor: dark
                  ? orlando
                    ? "rgba(161, 224, 227, 0.16)"
                    : "rgba(255, 255, 255, 0.12)"
                  : orlando
                    ? "#E5F8FB"
                    : "#FFFFFF",
                boxShadow: dark ? "none" : "0 8px 24px rgba(6, 124, 146, 0.08)",
              }}
            >
              <Typography
                component="h3"
                sx={{
                  m: 0,
                  fontWeight: 800,
                  fontSize: { xs: "1.25rem", sm: "1.35rem" },
                  lineHeight: 1.2,
                  color: dark ? "#FFFFFF" : orlando ? "#038B95" : "#067C92",
                }}
              >
                {location.city}
              </Typography>
              <Button
                component="a"
                href={location.callHref}
                variant={dark ? "contained" : "outlined"}
                sx={{
                  textTransform: "none",
                  whiteSpace: "normal",
                  lineHeight: 1.3,
                  height: "auto",
                  minHeight: 48,
                  px: 2,
                  py: 1.25,
                  fontWeight: 800,
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  borderRadius: "14px",
                  color: dark ? "#026B73" : "#067C92",
                  bgcolor: dark ? "#FFFFFF" : "transparent",
                  borderColor: dark ? "#FFFFFF" : "#067C92",
                  borderWidth: 2,
                  "&:hover": {
                    bgcolor: dark ? "#A1E0E3" : "rgba(6, 124, 146, 0.08)",
                    borderColor: dark ? "#A1E0E3" : "#067C92",
                    borderWidth: 2,
                  },
                  "&&:focus-visible": {
                    outline: dark ? "3px solid #FFFFFF" : "3px solid #067C92",
                    outlineOffset: "3px",
                  },
                }}
              >
                {location.callLabel}
              </Button>
              <NextLink href={location.bookHref} passHref legacyBehavior>
                <Button
                  component="a"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    whiteSpace: "normal",
                    lineHeight: 1.3,
                    height: "auto",
                    minHeight: 48,
                    px: 2,
                    py: 1.25,
                    fontWeight: 800,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    borderRadius: "14px",
                    color: "#FFFFFF",
                    bgcolor: orlando ? "#00ADCD" : "#067C92",
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: orlando ? "#038B95" : "#026B73",
                      boxShadow: "none",
                    },
                    "&&:focus-visible": {
                      outline: dark ? "3px solid #FFFFFF" : "3px solid #067C92",
                      outlineOffset: "3px",
                    },
                  }}
                >
                  {location.bookLabel}
                </Button>
              </NextLink>
              <MuiLink
                href={`mailto:${location.email}`}
                underline="hover"
                sx={{
                  fontWeight: 700,
                  overflowWrap: "anywhere",
                  color: dark ? "#FFFFFF" : "#038B95",
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                }}
              >
                {location.email}
              </MuiLink>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default LocationChoices;
