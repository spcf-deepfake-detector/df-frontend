import { Group, Title as MantineTitle, Image } from "@mantine/core";

export default function AppTitle() {
  return (
    <Group gap={0}>
      <Image src="/df-detector-icon.svg" />
      <MantineTitle
        order={4}
        style={{ fontFamily: "var(--mantine-major-mono-display)" }}
      >
        DeepFake Detector
      </MantineTitle>
    </Group>
  );
}
