import { Paper, Title, Stack, Group, Button } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { useState } from "react";

// CSS Modules
import classes from "./UploadCard.module.css";

// Components
import UploadContent from "./UploadContent.jsx";
import UploadResult from "./UploadResult.jsx";

// Images
import UploadIcon from "../../assets/buttons/UploadIcon.svg";

// Constants
const convertToMegabytes = (size) =>
  Math.round((size / (1024 * 1024)) * 100) / 100;

const defaultTitle = (classTitle) => (
  <>
    <span className={classTitle}>Choose a File </span>
    or Drag here to Detect Deepfake Videos
  </>
);

const MAX_SIZE = 50 * 1024 * 1024;
const MAX_FILES = 1;

export default function UploadCard({
  result: { loading, data },
  onClick,
  onReset,
  ...props
}) {
  const [file, setFile] = useState(null);

  const handleDrop = (files) => {
    handleReset();

    if (files.length > 0) {
      setFile(files);
    }
  };

  const handleReset = () => {
    setFile(null);
    onReset();
  };

  const handleDetect = () => {
    if (file && file.length > 0) {
      onClick(file);
    }
  };

  const uploadLabels = {
    idle: {
      image: UploadIcon,
      title: defaultTitle(classes.TextHiglight),
      subtitle: "Supported format: MP4, with a maximum size of 50MB",
      color: "",
    },
    reject: {
      status: "File Exceeded Maximum Size",
      title: defaultTitle(classes.TextReject),
      subtitle: "Supported format: MP4, with a maximum size of 50MB",
      color: "red.6",
    },
    accept: {
      status: "File Uploaded",
      title: file ? file[0].name : "",
      subtitle: file ? `${convertToMegabytes(file[0].size)} MB` : "",
    },
  };

  const whichUploadContent = () => {
    if (file === undefined) return uploadLabels.reject;
    else if (file === null) return uploadLabels.idle;
    else return uploadLabels.accept;
  };

  return (
    <Paper radius="lg" bg="gray.4" p={{ base: 25, sm: 35 }} {...props}>
      <Stack align="center" gap="lg">
        <Title order={3}>Scan for Deepfakes</Title>

        {/* Upload Field */}
        <Dropzone
          p={{ base: 13, lg: 20 }}
          mih={120}
          className={classes.DropzoneBorder}
          accept={["video/mp4"]}
          maxSize={MAX_SIZE}
          maxFiles={MAX_FILES}
          multiple={false}
          onDrop={handleDrop}
          onReject={() => setFile(undefined)}
          styles={{
            root: {
              backgroundColor: "var(--mantine-color-gray-4)",
            },
          }}
        >
          <UploadContent {...whichUploadContent()} />
        </Dropzone>
      </Stack>

      {/* Data */}
      <UploadResult mt={30} loading={loading} data={data} />

      {/* Action Buttons */}
      <Group grow gap="xl" align="center" mt={30}>
        <Button
          onClick={handleReset}
          variant="filled"
          color="rgba(1, 65, 117, 0.3)"
          c="blue.9"
        >
          Reset
        </Button>
        <Button
          onClick={handleDetect}
          variant="filled"
          color="rgba(12, 91, 155, 0.8)"
          c="white"
        >
          Detect Now
        </Button>
      </Group>
    </Paper>
  );
}
