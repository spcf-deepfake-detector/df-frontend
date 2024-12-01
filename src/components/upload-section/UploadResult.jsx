import { Box, Stack, Text } from "@mantine/core";
import BarLoader from "../loaders/BarLoader.jsx";

export default function UploadResult({ data, loading, ...props }) {
  const resultData = data && (
    <Stack gap={8}>
      <Text size="sm">
        <span style={{ fontWeight: "bold" }}>Prediction:</span>{" "}
        {data.prediction}
      </Text>
      <Text size="sm">
        <span style={{ fontWeight: "bold" }}>Confidence:</span>{" "}
        {data.confidence}
      </Text>
      <Text size="sm">
        <span style={{ fontWeight: "bold" }}>Fake Ratio:</span>{" "}
        {data.fake_ratio}
      </Text>
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
