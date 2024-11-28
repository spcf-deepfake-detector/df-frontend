import { Box, Group, Image, Text } from "@mantine/core";

export default function IconLabel({ icon, label: { title, description } }) {
  return (
    <Group align="start" gap={10}>
      <Image src={icon} />
      <Box>
        <Text lh={1.2} fw={500}>
          {title}
        </Text>
        <Text lh={1.2}>{description}</Text>
      </Box>
    </Group>
  );
}
