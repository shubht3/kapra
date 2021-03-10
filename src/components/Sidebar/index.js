import React from 'react';
import { ExternalLink } from 'react-external-link';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SideBtn
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='problem'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Problem
          </SidebarLink>
          <SidebarLink
            to='solution'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Solution
          </SidebarLink>
          <SideBtnWrap>
            <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSfOt2x4HU7yms_VJqRVLVFRaQDr-ugjcxgsiZ20fWScYzQKSg/viewform">
              <SideBtn>Contact Us!</SideBtn>
            </ExternalLink>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
