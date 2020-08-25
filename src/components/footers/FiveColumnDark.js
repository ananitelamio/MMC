import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import translate from "../../i18n/translate";

import LogoImage from "images/logo.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-900 text-gray-100 -mx-8 -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/4 w-full mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/4`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const FooterLink = tw(Link)`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoImg = tw.img`h-16`;
const LogoText = tw.h5`ml-2 text-xl font-black`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div``
const CompanyInfo = tw.div``

const Divider = tw.div`my-8 border-b-2 border-gray-800`
export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <CompanyColumn>
            <LogoContainer>
              <LogoImg src={LogoImage} />
              <LogoText>My Mobile Cash</LogoText>
            </LogoContainer>
            <CompanyAddress>
              Corniche Square lot #536, Goumel, Ziguinchor, SENEGAL 
            </CompanyAddress>
            <SocialLinksContainer>
              <SocialLink href="https://www.facebook.com/Mymobilecash/">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com/Mymobilecash">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://www.youtube.com/channel/UC-ZBj_VuG8qwXc6EWmgfLMQ">
                <YoutubeIcon />
              </SocialLink>
            </SocialLinksContainer>
          </CompanyColumn>
          <Column>
            <ColumnHeading>{translate("footer_quicklinks")}</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <FooterLink to="#">Blog</FooterLink>
              </LinkListItem>
              <LinkListItem>
                <FooterLink to="/">{translate("footer_home")}</FooterLink>
              </LinkListItem>
              <LinkListItem>
                <FooterLink to="/about-us">{translate("footer_about_us")}</FooterLink>
              </LinkListItem>
              <LinkListItem>
                <FooterLink to="/contact">{translate("footer_contact")}</FooterLink>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>{translate("footer_legal")}</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
              </LinkListItem>
              <LinkListItem>
                <FooterLink to="/terms">Terms of Service</FooterLink>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>
                +221 76 426 22 57
              </LinkListItem>
              <LinkListItem>
                <Link to="mailto:support@mymobilecash.net">support@mymobilecash.net</Link> 
              </LinkListItem>
              <LinkListItem>
                <Link to="mailto:infos@mymobilecash.net">infos@mymobilecash.net</Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider/>
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>&copy; Copyright 2020, My Mobile Cash.</CopyrightNotice>
          <CompanyInfo>Your New Partner.</CompanyInfo>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};