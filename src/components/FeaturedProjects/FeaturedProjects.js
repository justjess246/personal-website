import React from 'react';
import { Button } from '../../GlobalStyles';
import { IconContext } from 'react-icons/lib';
import {
  FeaturedProjectsSection,
  ProjectsWrapper,
  ProjectsHeading,
  ProjectsContainer,
  ProjectsCard,
  ProjectsCardInfo,
  ProjectsCardPlan,
  ProjectsCardLength,
  ProjectsCardFeatures,
  ProjectsCardFeature,
  ProjectsButtonWrapper,
  Img,
} from './FeaturedProjectsElements';

function FeaturedProjects(
  img,
  alt,
  start
) {
    return (
      <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
        <FeaturedProjectsSection id="projects">
          <ProjectsWrapper>
            <ProjectsHeading>Featured Projects</ProjectsHeading>
            <ProjectsContainer>
              <ProjectsCard>
                <ProjectsCardInfo>
                  <ProjectsCardPlan>Bubble Math</ProjectsCardPlan>
                  <ProjectsCardLength>JavaScript, p5.js library, HTML, CSS | Oct. 2020</ProjectsCardLength>
                    <a href = 'https://glitch.com/~math-dancing-app' target='_blank'>
                      <Img src={require('../../assets/bubble_math.png').default} />
                    </a>
                  <ProjectsCardFeatures>
                    {/* <ProjectsCardFeature>Developed with a team of 4 designers and 3 programmers for a hackathon</ProjectsCardFeature>
                    <ProjectsCardFeature>Intended to provide children a fun way to develop their basic algebra skills</ProjectsCardFeature>
                    <ProjectsCardFeature>Added game elements like bouncing bubbles and popup screens with listed languages and tools</ProjectsCardFeature> */}
                  </ProjectsCardFeatures>
                  <ProjectsButtonWrapper>
                    <a href='https://glitch.com/edit/#!/math-dancing-app' target='_blank'>
                      <Button primary>Source Code</Button>
                    </a>
                  </ProjectsButtonWrapper>
                </ProjectsCardInfo>
              </ProjectsCard>
              <ProjectsCard>
                <ProjectsCardInfo>
                  <ProjectsCardPlan>Reactions to COVID Reopening</ProjectsCardPlan>
                  <ProjectsCardLength>Python, Keras, Natural Language Toolkit | Sept. 2020</ProjectsCardLength>
                    <a href = 'https://github.com/justjess246/state-reactions-to-reopening' target='_blank'>
                      <Img src={require('../../assets/reopening.png').default} />
                    </a>
                  <ProjectsCardFeatures>
                    {/* <ProjectsCardFeature>Created a machine learning model that analyzes tweets from US states and returns if they’re lenient, neutral, or against reopening</ProjectsCardFeature>
                    <ProjectsCardFeature>Intended for obtaining a general feeling among people in response to the news of reopening during COVID</ProjectsCardFeature> */}
                  </ProjectsCardFeatures>
                  <ProjectsButtonWrapper>
                    <a href='https://github.com/justjess246/state-reactions-to-reopening' target='_blank'>
                      <Button primary>Source Code</Button>
                    </a>
                  </ProjectsButtonWrapper>
                </ProjectsCardInfo>
              </ProjectsCard>
              
            </ProjectsContainer>
          </ProjectsWrapper>
        </FeaturedProjectsSection>
      </IconContext.Provider>
    );
  }
  export default FeaturedProjects;

  