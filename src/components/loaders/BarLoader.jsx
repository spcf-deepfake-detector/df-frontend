import { Loader, Stack, Text } from "@mantine/core";

export default function BarLoader({ message }) {
  return (
    <Stack align="center">
      <Loader type="bars" />
      <Text size="sm">{message}</Text>
    </Stack>
  );
}
