import { Text, Title } from "@mantine/core";
import Container from "../Container.jsx";
import classes from "./UploadSection.module.css";

export default function UploadSection() {
  return (
    <section className={classes.UploadSection}>
      <Container py={120}>
        <Title c="white" order={2}>
          Upload Section
        </Title>
        <Text c="white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quam
          explicabo veniam aliquid, amet quibusdam ratione quo dicta, voluptatum
          culpa, quas blanditiis fuga? Odio velit assumenda, facere fugit
          aliquam asperiores!
        </Text>
      </Container>
    </section>
  );
}
