import React, { useState } from 'react';
import ReactPlayer from "react-player"
import { ExternalLink } from 'react-external-link';

import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroBtn
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>shopping is evolving</HeroH1>
        <HeroP>
          Watch our concept video below!
        </HeroP>
        <HeroBtnWrapper>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=1P8gqKAOqsw"
        />
        <HeroP>

        </HeroP>
        <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSfOt2x4HU7yms_VJqRVLVFRaQDr-ugjcxgsiZ20fWScYzQKSg/viewform">
              <HeroBtn>Contact Us!</HeroBtn>
        </ExternalLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
