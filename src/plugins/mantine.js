import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
  other: {
    majorMonoDisplay: "Major Mono Display, monospace",
  },
});

const resolver = (theme) => ({
  variables: {
    "--mantine-major-mono-display": theme.other.majorMonoDisplay,
  },
});

export { theme, resolver };
