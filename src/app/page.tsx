"use client";

import { Grid, Box } from "@radix-ui/themes";
import ProfilePhoto from "../components/ProfilePhoto";
import AboutSection from "../components/AboutSection";
import InterestsSection from "../components/InterestsSection";

export default function Home() {
  return (
    <main className="container max-w-6xl mx-auto py-12">
      <Grid
        columns={{ initial: "1", md: "170px 1fr" }}
        gap="3"
        align="start"
      >
        <Box>
          <ProfilePhoto />
        </Box>

        <Grid rows="2" gap="3">
          <Box>
            <AboutSection />
          </Box>
          <Box>
            <InterestsSection />
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}