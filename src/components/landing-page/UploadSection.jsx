import { Flex, Stack, Text, Title, Group, Image } from "@mantine/core";

// Components
import UploadCard from "../upload-section/UploadCard.jsx";
import Container from "../Container.jsx";

// CSS Modules
import classes from "./UploadSection.module.css";

// Media
import CCISLogo from "../../assets/images/CCIS.png";
import SPCFLogo from "../../assets/images/SPCF.png";
import ICTDULogo from "../../assets/images/ICTDU.png";

// Zustand
import { useDeepFakeStore } from "../../store/deepfake.js";
import { useShallow } from "zustand/shallow";
import useRequest from "../../hooks/useRequest.jsx";

const images = [CCISLogo, SPCFLogo, ICTDULogo];

export default function UploadSection({ ...props }) {
  const { analyzeDeepfakeFn, resetDeepfakeFn, data } = useDeepFakeStore(
    useShallow((state) => ({
      analyzeDeepfakeFn: state.analyzeDeepfake,
      resetDeepfakeFn: state.resetDeepfake,
      data: state.data,
    }))
  );

  const { requestWithLoading, loading } = useRequest({
    fetchFn: analyzeDeepfakeFn,
  });

  const handleDeepfakeUpload = (payload) => {
    // Prepare the payload data using FormData
    const formdata = new FormData();
    formdata.append("video", payload[0]);

    // Call the fetchDeepfake function from the store
    requestWithLoading(formdata);
  };

  const logoImages = images.map((image, index) => (
    <Image key={"image" + index} src={image} h={{ base: 50, md: 50 }} />
  ));

  const deepfakeResult = data?.results;

  return (
    <section className={classes.UploadSection} {...props}>
      <Container py={120}>
        <Group className={classes.ImagesPosition}>{logoImages}</Group>
        <Flex
          gap={{ base: 35, md: 40 }}
          direction={{ base: "column", md: "row" }}
          className={classes.FlexProperties}
        >
          <Stack flex={1} gap="lg" align={{ base: "center", md: "" }}>
            <Title fz={{ base: 35, sm: 50, md: 50 }} c="white">
              Stay Protected Against Deepfake Manipulation
            </Title>
            <Text fz={{ base: 14, md: 18, lg: 20 }} c="white">
              Our deepfake detection uses AI-powered technology to identify
              whether video content is real or manipulated.
            </Text>
          </Stack>
          <UploadCard
            flex={1}
            maw={550}
            onClick={handleDeepfakeUpload}
            onReset={resetDeepfakeFn}
            result={{ data: deepfakeResult, loading }}
          />
        </Flex>
      </Container>
    </section>
  );
}
