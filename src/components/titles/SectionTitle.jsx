import { Divider, Title, Text, Group, Box } from "@mantine/core";
import { rem } from "@mantine/core";

export default function SectionTitle({ title, subtitle, color, ...props }) {
  return (
    <>
      <Group visibleFrom="sm" justify="center" c={color} {...props}>
        <Title fz={{ base: 20, md: 26 }}>{title}</Title>
        <Divider
          orientation="vertical"
          size="xl"
          style={{
            borderRadius: rem(10),
          }}
          color="rgba(0, 93, 169, 1)"
        />
        <Text size="sm">{subtitle}</Text>
      </Group>

      <Box hiddenFrom="sm" c={color} ta="center" {...props}>
        <Title order={2}>{title}</Title>
        <Divider
          w={100}
          mx="auto"
          my={8}
          size="xl"
          style={{
            borderRadius: rem(10),
          }}
          color="rgba(0, 93, 169, 1)"
        />
      </Box>
    </>
  );
}
