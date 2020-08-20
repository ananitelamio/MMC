import React from "react";
import tw from "twin.macro"; //eslint-disable-line
//import { css } from "styled-components/macro"; //eslint-disable-line
import translate from "../i18n/translate";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/FiveColumnDark.js";
import customerSupportIllustrationSrc from "images/faq.svg";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Features />
    <MainFeature2 />
    <Testimonial
      subheading={translate('testimonial_subheading')}
      heading={
        <>
          {translate('testimonial_heading', {span: text => (<span tw="text-primaryOrange-500"> {text} </span>)})}
        </>
      }
      description={translate('testimonial_description')}
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          quote:
          translate('testimonial_quote1'),
          customerName: "Charlotte Hale",
          customerTitle: "CEO, Tesla Inc."
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
          translate('testimonial_quote2'),
          customerName: "Adam Cuppy",
          customerTitle: "Founder, Nestle"
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
          translate('testimonial_quote3'),
          customerName: "Leslie Okana",
          customerTitle: "Founder, OKADA"
        }
      ]}
      textOnLeft={true}
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