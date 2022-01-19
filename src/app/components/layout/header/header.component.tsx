import React from "react";
import { Container, Title,SubTittle, SocialMedias, SocialMedia } from './header.styles';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineInstagram, AiFillGithub } from "react-icons/ai";

const SocialMediaList = [
  { name: "Twitter", icon: AiOutlineTwitter, link: "https://twitter.com/RojasDaniel0909" },
  { name: "Linkedin", icon: AiOutlineLinkedin, link: "https://www.linkedin.com/in/daniel-rojas-rodriguez-b29088179/" },
  { name: "Instagram", icon: AiOutlineInstagram, link: "https://www.instagram.com/dani0105_r.r/" },
  { name: "Github", icon: AiFillGithub, link: "https://github.com/dani0105" },
]

export class HeaderComponent extends React.Component {

  render() {
    return (
      <Container>
        <Title>
          Daniel Rojas
        </Title>
        <SubTittle>
          Desarrollador Web
        </SubTittle>

        <SocialMedias>
          {SocialMediaList.map(socialMedia => (
            <SocialMedia target="_blank" key={socialMedia.name} href={socialMedia.link}>
              {<socialMedia.icon />}
            </SocialMedia>
          ))}
        </SocialMedias>
        
      </Container>
    );
  }

}
