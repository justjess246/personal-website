import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const FeaturedProjectsSection = styled.div`
  padding: 100px 0 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const ProjectsHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectsCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 420px;
  /* height: 600px; */
  height: 450px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 32px;
  }

  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
`;

export const ProjectsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ProjectsCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const ProjectsCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ProjectsCardFeatures = styled.li`
  margin: 28px 10px 2px;
  padding-left: 2em;
  text-indent: -2em;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #a9b3c1;
`;

export const ProjectsCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const ProjectsButtonWrapper = styled.div`
  position: aboslute;
  margin: 20px 0 0 0;
`