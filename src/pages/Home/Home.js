import React from 'react';
import { homeObjOne, homeObjTwo } from './HomeElements';
import { AboutSection, FeaturedProjects } from '../../components/ComponentsIndex';

function Home() {
  return (
    <>
      <AboutSection {...homeObjOne} />
      <FeaturedProjects {...homeObjTwo} />
    </>
  );
}

export default Home;
