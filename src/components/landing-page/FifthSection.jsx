import Container from "../Container";
import SectionTitle from "../titles/SectionTitle.jsx";
import { Grid, Image } from "@mantine/core";


export default function FifthSection() {
  return (
    <section>
      <Container py={120}>
        <SectionTitle
          title="Ensuring Content Authenticity"
          subtitle="The Importance of using Deepfake Detection"
          color="black"
          mb={36}
        />

        <Grid span={{base: 12, md: 6}}>
             <Image></Image>
        </Grid>
      </Container>
    </section>
  );
}
