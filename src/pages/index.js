import React from "react";
import {
  // AboutSection,
  // ArticlesSection,
  // ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Andrew Luxmore portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        {/* <AboutSection sectionId="about" heading="About Portfolio Minimal" /> */}
        {/* <InterestsSection sectionId="details" heading="Details" /> */}
        <ProjectsSection sectionId="projects" heading="Projects" />
        {/* <InterestsSection sectionId="sketches" heading="Sketches" /> */}
        {/* <ContactSection sectionId="github" heading="Github" /> */}
      </Page>
    </>
  );
}
