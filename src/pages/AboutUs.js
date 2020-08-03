import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnDark.js";
import MainFeature1 from "components/features/TwoColWith3P.js";
import GetStarted from "components/cta/GetStarted.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        heading="Who are we and what do we do?"
        descriptionP1="We are My Mobile Cash, 
        the online money transfer service that allows you to quickly send money and make payments from your mobile phone, 
        computer or tablet. 
        Transfer money to your loved ones at any time."
        descriptionP2="We build open relationships with partners by offering several business solutions to help us expand. 
        We advocate easy access to brainstorming to gather the best offers and create opportunities and innovative solutions around My Mobile Cash."
        descriptionP3="We are building a strong and reliable friendly network across several countries around the world."
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        heading="Our Mission and Vision"
        descriptionP1="Mymobile Cash's vision is to facilitate money transfers and payments to millions of people around the world, continuing to meet their needs and involve an active community to study and if possible adapt their suggestions. Mymobile Cash aims to be more helpful than ever, simpler and even cheaper over time."
        descriptionP2="In addition to covering 18 countries, we work hard to be present in the least accessible areas and especially those affected by political situations."
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <GetStarted
      />
      <Footer />
    </AnimationRevealPage>
  );
};