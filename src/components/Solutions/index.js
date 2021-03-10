import React from 'react';
import Icon1 from '../../images/svg-5.svg';
import Icon2 from '../../images/26368.jpg';
import Icon3 from '../../images/4670240.jpg';
import Icon4 from '../../images/2992779.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesH3
  
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='solution'>
      <ServicesH3>Solution</ServicesH3>
      <ServicesH1>How we plan on solving shopping online...</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Feed</ServicesH2>
          <ServicesP>
          A catered culmination of trends, content, and knowledge of clothing you’ve already been interested about or newer styles you’ve been experimenting with.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Avatar</ServicesH2>
          <ServicesP>
          A personalized avatar that mirrors your body in a virtual setting that displays you in any clothing item of your choice allowing you to make the best clothing decisions.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Shopping</ServicesH2>
          <ServicesP>
          By keeping your interests in mind we’ll make sure to keep your clothing recommendations constantly updated so you can buy what you love.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Chat</ServicesH2>
          <ServicesP>
          We want to make sure you can share your looks and new styles to the world, friends, and groups.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
