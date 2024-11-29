import { Paper, Title, Stack, Text, Group, Button, Image } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";

// Media
import UploadIcon from "../assets/buttons/UploadIcon.svg";

// CSS Modules
import classes from "./UploadCard.module.css";

export default function UploadCard() {
  return (
    <Paper
      radius={12}
      w={{ base: 475, lg: 600 }}
      p={40}
      styles={{
        root: {
          backgroundColor: "var(--mantine-color-gray-4)",
        },
      }}
    >
      <Stack align="center" gap="lg">
        <Title order={3}>Scan for Deepfakes</Title>

        {/* Upload Field */}
        <Dropzone
          p={20}
          className={classes.DropzoneBorder}
          styles={{
            root: {
              backgroundColor: "var(--mantine-color-gray-4)",
            },
          }}
        >
          <Stack align="center" gap="xs">
            <Image src={UploadIcon} w={20}></Image>
            <Group gap={3}>
              <Text fz="sm" c="blue.9" fw={650}>
                Choose a File
              </Text>
              <Text fz={{base: "xs", lg: "sm"}}>or Drag here to Detect Deepfake Videos</Text>
            </Group>
            <Text fz={{base: 11, lg: "xs"}} c="dimmed">
              Supported format: MP4, with a maximum size of 50MB
            </Text>
          </Stack>
        </Dropzone>
      </Stack>

      {/* Action Buttons */}
      <Group grow gap="xl" align="center" mt={30}>
        <Button variant="filled" color="rgba(1, 65, 117, 0.3)" c="blue.9">
          Reset
        </Button>
        <Button variant="filled" color="rgba(12, 91, 155, 0.8)" c="white">
          Detect Now
        </Button>
      </Group>
    </Paper>
  );
}
