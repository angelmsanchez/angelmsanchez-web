import React from "react";
import {
  AboutSection,
  ArticlesSection,
  // ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import { ContactSection } from "../components/ContactSection/ContactSection";

export default function IndexPage() {
  return (
    <>
      <Seo title="Angel Muñoz Sanchez Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Medium"]}
        />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
