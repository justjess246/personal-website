import React from 'react';
import {
    FaGithub,
    FaLinkedin
  } from 'react-icons/fa';
import {
    IoMdMail
} from 'react-icons/io';
import {
    ContactContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    ContactHeading,
    Subtitle,
    ImgWrapper,
    TextWrapper,
    ContactColumn,
    ContactRow,
    Img,
    ContactLink
} from './ContactSectionElements';

function ContactSection() {
    return (
        <ContactContainer>
            <ContactRow>
                <ContactColumn>
                    <ImgWrapper>
                        <Img src={require('../../assets/contact_clean2.png').default}></Img>
                    </ImgWrapper>
                </ContactColumn>
                <ContactColumn>
                    <ContactHeading>Contact</ContactHeading>
                    <TextWrapper>
                        <Subtitle>Please feel free to reach out if you have any questions for me, or would like to work on a project together. I also just love meeting new people!</Subtitle>
                        <ContactLink href='mailto: jbjb2200@gmail.com' target='_blank' aria-label='Email'>Email </ContactLink>
                        <ContactLink href='https://github.com/justjess246' target='_blank' aria-label='Github'>Github </ContactLink>
                        <ContactLink href='https://www.linkedin.com/in/jessica-liyao-burroughs/' target='_blank' aria-label='LinkedIn'>LinkedIn</ContactLink>
                    </TextWrapper>
                </ContactColumn>
            </ContactRow>
            
            <SocialMedia>
                <SocialMediaWrap>
                <SocialLogo to='/'>
                    <SocialIcon />
                    JB
                </SocialLogo>
                <WebsiteRights>Created by Jessica Burroughs</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='mailto: jbjb2200@gmail.com' target='_blank' aria-label='Email'>
                    <IoMdMail />
                    </SocialIconLink>
                    <SocialIconLink href='https://github.com/justjess246' target='_blank' aria-label='Github'>
                    <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.linkedin.com/in/jessica-liyao-burroughs/' target='_blank' aria-label='LinkedIn'>
                    <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </ContactContainer>
    );
}
export default ContactSection;