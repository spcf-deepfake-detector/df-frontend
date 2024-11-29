import { Paper, Title, Stack, Group, Button } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";

// CSS Modules
import classes from "./UploadCard.module.css";

// Components
import UploadContent from "./UploadContent";
import { useState } from "react";

export default function UploadCard({ ...props }) {
  const [file, setFile] = useState();

  return (
    <Paper radius="lg" bg="gray.4" p={{ base: 25, sm: 35 }} {...props}>
      <Stack align="center" gap="lg">
        <Title order={3}>Scan for Deepfakes</Title>

        {/* Upload Field */}
        <Dropzone
          p={{ base: 13, lg: 20 }}
          className={classes.DropzoneBorder}
          styles={{
            root: {
              backgroundColor: "var(--mantine-color-gray-4)",
            },
          }}
        >
          <UploadContent />
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
