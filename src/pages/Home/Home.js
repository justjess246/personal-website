import React from 'react';
import { homeObjOne, homeObjTwo } from './HomeElements';
import { AboutSection, FeaturedProjects, ArtSection, ContactSection } from '../../components/ComponentsIndex';

function Home() {
  return (
    <>
      <AboutSection {...homeObjOne} />
      <FeaturedProjects/>
      <ArtSection />
      <ContactSection />
    </>
  );
}

export default Home;
