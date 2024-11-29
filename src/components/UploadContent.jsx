import { Stack, Image, Text } from "@mantine/core";
import { useState } from "react";

// Media
import UploadIcon from "../assets/buttons/UploadIcon.svg";

// CSS Modules
import classes from "./UploadCard.module.css";

export default function UploadContent() {

  return (
    <>
      <Stack align="center" gap="xs">
        <Image src={UploadIcon} w={{ base: 15, sm: 20 }}></Image>
        <Text fz="xs">
          <span className={classes.TextHiglight}>Choose a File </span>
          or Drag here to Detect Deepfake Videos
        </Text>
        <Text fz={11} c="dimmed">
          Supported format: MP4, with a maximum size of 50MB
        </Text>
      </Stack>
    </>
  );
}
