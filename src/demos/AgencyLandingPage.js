import React from "react";
import tw from "twin.macro"; //eslint-disable-line
//import { css } from "styled-components/macro"; //eslint-disable-line
import translate from "../i18n/translate";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/DashedBorderSixFeatures";
import GetStarted from "components/cta/GetStarted.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/FiveColumnDark.js";
import customerSupportIllustrationSrc from "images/faq.svg";
import Nathalie from "images/nathalie.png"
import Amadou from "images/david.png"
import Ghislain from "images/timothy.png"

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <GetStarted/>
    <Features />
    <MainFeature2 />
    <Testimonial 
      description={translate('testimonial_description')}
      testimonials={[
        {
          imageSrc:
            Nathalie,
          quote:
          translate('testimonial_quote1'),
          customerName: "Nathalie Massamba"
        },
        {
          imageSrc:
            Ghislain,
          quote:
          translate('testimonial_quote2'),
          customerName: "Ghislain Kone"
        },
        {
          imageSrc:
            Amadou,
          quote:
          translate('testimonial_quote3'),
          customerName: "Amadou Gueye"
        }
      ]}
    />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          {translate('faq_heading', {
                  span: chunks => <span tw="text-primaryOrange-500">{chunks}</span>
                })}
        </>
      }
    />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);