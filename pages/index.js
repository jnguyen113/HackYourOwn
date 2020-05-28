import RootLayout from "layouts/RootLayout";
import Container from "@material-ui/core/Container";
import {
  AboutSection,
  GoalSection,
  SupportSection,
  WhoWeAreSection,
} from "components/Typography/IndexText";
import React from 'react';

export default function Index() {
  return (
    <RootLayout title="Home | HYO">
      <Container maxWidth="md">
        <AboutSection />
        <GoalSection />
        <WhoWeAreSection />
        <SupportSection />
      </Container>
    </RootLayout>
  );
}
