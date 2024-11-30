import { Stack, Image, Text } from "@mantine/core";
import { useMemo } from "react";

export default function UploadContent({
  image,
  status,
  title,
  subtitle,
  color,
}) {
  const whichTitle = useMemo(() => {
    if (image) {
      return <Image src={image} w={{ base: 15, sm: 20 }} />;
    } else if (status) {
      return (
        <Text size="xs" fw="bold">
          {status}
        </Text>
      );
    }
  }, [status, image]);

  return (
    <Stack align="center" gap="xs" c={color}>
      {whichTitle}
      <Text size="xs" c={color ? color : "black"}>
        {title}
      </Text>
      <Text fz={11} c={color ? color : "dimmed"}>
        {subtitle}
      </Text>
    </Stack>
  );
}
