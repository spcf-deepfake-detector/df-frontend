import { Box, Stack, Text } from "@mantine/core";
import BarLoader from "../loaders/BarLoader.jsx";

const resultMeta = [
  {
    label: "Prediction",
    key: "prediction",
  },
  {
    label: "Confidence",
    key: "confidence",
  },
  {
    label: "Fake Ratio",
    key: "fake_ratio",
  },
];

export default function UploadResult({ data, loading, ...props }) {
  const resultData = data && (
    <Stack gap={10}>
      {resultMeta.map(({ label, key }) => (
        <Text size="sm" key={key}>
          <span style={{ fontWeight: "bold" }}>{label}:</span> {data[key]}
        </Text>
      ))}
    </Stack>
  );

  const whichToDisplay = () => {
    if (loading) {
      return <BarLoader message="Loading Please wait for the results" />;
    } else if (data) {
      return resultData;
    } else {
      return;
    }
  };

  return <Box {...props}>{whichToDisplay()}</Box>;
}
