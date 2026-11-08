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
  tone?: "light" | "dark";
  showEmail?: boolean;
};

const LocationChoices = ({ tone = "light", showEmail = false }: LocationChoicesProps) => {
  const dark = tone === "dark";

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
        columnGap: { xs: 1, sm: 2 },
        width: "100%",
        minWidth: 0,
      }}
    >
      {locations.map((location) => (
        <Box
          key={location.city}
          component="section"
          aria-label={`${location.city} call and booking`}
          sx={{
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 0.75,
          }}
        >
          <Typography
            component="p"
            sx={{
              m: 0,
              fontWeight: 800,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              lineHeight: 1.2,
              color: dark ? "#FFFFFF" : "#067C92",
            }}
          >
            {location.city}
          </Typography>
          <NextLink href={location.bookHref} passHref legacyBehavior>
            <Button
              component="a"
              variant="contained"
              aria-label={location.bookLabel}
              sx={{
                textTransform: "none",
                whiteSpace: "normal",
                lineHeight: 1.25,
                boxSizing: "border-box",
                height: "auto",
                minHeight: 44,
                minWidth: 0,
                width: "100%",
                px: { xs: 1, sm: 1.5 },
                py: 0.75,
                fontWeight: 800,
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                borderRadius: "999px",
                color: dark ? "#026B73" : "#FFFFFF",
                bgcolor: dark ? "#FFFFFF" : "#026B73",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: dark ? "#A1E0E3" : "#015860",
                  color: dark ? "#026B73" : "#FFFFFF",
                  boxShadow: "none",
                },
                "&&:focus-visible": {
                  outline: dark
                    ? "3px solid #FFFFFF !important"
                    : "3px solid #067C92 !important",
                  outlineOffset: "2px",
                },
              }}
            >
              {location.bookLabel}
            </Button>
          </NextLink>
          <Button
            component="a"
            href={location.callHref}
            variant="outlined"
            aria-label={location.callLabel}
            sx={{
              textTransform: "none",
              whiteSpace: "normal",
              lineHeight: 1.25,
              boxSizing: "border-box",
              height: "auto",
              minHeight: 44,
              minWidth: 0,
              width: "100%",
              px: { xs: 1, sm: 1.5 },
              py: 0.75,
              fontWeight: 700,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              borderRadius: "999px",
              color: dark ? "#FFFFFF" : "#067C92",
              borderColor: dark ? "rgba(255,255,255,0.85)" : "#067C92",
              bgcolor: dark ? "transparent" : "#FFFFFF",
              "&:hover": {
                bgcolor: dark ? "rgba(255,255,255,0.12)" : "#F4FBFB",
                borderColor: dark ? "#FFFFFF" : "#038B95",
                color: dark ? "#FFFFFF" : "#067C92",
              },
              "&&:focus-visible": {
                outline: dark
                  ? "3px solid #FFFFFF !important"
                  : "3px solid #067C92 !important",
                outlineOffset: "2px",
              },
            }}
          >
            {location.callLabel}
          </Button>
          {showEmail ? (
            <MuiLink
              href={`mailto:${location.email}`}
              underline="hover"
              sx={{
                fontWeight: 700,
                overflowWrap: "anywhere",
                color: dark ? "#FFFFFF" : "#038B95",
                fontSize: { xs: "0.7rem", sm: "0.8rem" },
                lineHeight: 1.3,
              }}
            >
              {location.email}
            </MuiLink>
          ) : null}
        </Box>
      ))}
    </Box>
  );
};

export default LocationChoices;
