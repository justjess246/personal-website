import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../GlobalStyles';
import {
  AboutSec,
  AboutRow,
  AboutColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './AboutSectionElements';

function AboutSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <div>
      <AboutSec lightBg={lightBg}>
        <Container>
          <AboutRow imgStart={imgStart}>
            <AboutColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <a href={require("./../../assets/Jessica_Burroughs_Resume.pdf").default} target="_blank">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </a>
              </TextWrapper>
            </AboutColumn>
            {/* <AboutColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </AboutColumn> */}
          </AboutRow>
        </Container>
      </AboutSec>
    </div>
  );
}

export default AboutSection;