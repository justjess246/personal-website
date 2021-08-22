import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {
    SlideSection,
    ArtHeading,
    IndividualSlide,
    Description,
    Img
} from './ArtSectionElements'


function ArtSection() {
 
      return (
        <SlideSection>
        <ArtHeading>Art</ArtHeading>
          <Slide easing="ease">
            <IndividualSlide>
              <div>
                <Img src={require('../../assets/image1.jpg').default} />
                {/* <Description>Slide 1</Description> */}
              </div>
            </IndividualSlide>
            <IndividualSlide>
              <div>
                <Img src={require('../../assets/image2.jpg').default} />
                {/* <Description>Slide 2</Description> */}
              </div>
            </IndividualSlide>
            <IndividualSlide>
              <div>
                <Img src={require('../../assets/image3.jpg').default} />
                {/* <Description>Slide 3</Description> */}
              </div>
            </IndividualSlide>
            <IndividualSlide>
              <div>
                <Img src={require('../../assets/image4.jpg').default} />
                {/* <Description>Slide 4</Description> */}
              </div>
            </IndividualSlide>
          </Slide>
        </SlideSection>
      );
}
export default ArtSection;

