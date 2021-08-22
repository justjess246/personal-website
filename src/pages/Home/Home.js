import React from 'react';
import { homeObjOne, homeObjTwo } from './HomeElements';
import { AboutSection, FeaturedProjects, ArtSection } from '../../components/ComponentsIndex';

function Home() {
  return (
    <>
      <AboutSection {...homeObjOne} />
      <FeaturedProjects/>
      <ArtSection />
    </>
  );
}

export default Home;
