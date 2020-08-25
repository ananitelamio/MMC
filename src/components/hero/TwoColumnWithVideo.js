import React, { useState, useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {AppContext} from "../../providers/context";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import translate from "../../i18n/translate";

import Header from "../headers/light.js";

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import Quote from "../forms/Quote.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import herobackground from "../../images/hero-smile.jpg";


const Container = styled.div`
    ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
    background-image: url("${herobackground}");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;

const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl text-primaryOrange-500`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-secondaryBlue-600 bg-gray-200 bg-opacity-75 rounded max-w-lg mx-auto lg:mx-0 p-3`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-secondaryBlue-600 text-gray-100 hocus:bg-secondaryBlue-700 focus:shadow-outline focus:outline-none transition duration-300`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 max-w-screen-sm absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 border-l-4 border-secondaryBlue-600 text-secondaryBlue-600 bg-gray-200 bg-opacity-75 p-2 rounded font-medium text-sm`;

const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-secondaryBlue-600`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const {state} = useContext(AppContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      
      <Container>
        <OpacityOverlay/>
        <HeroContainer>
            <Header />
            <TwoColumn>
                <LeftColumn>
                    <Notification>{translate('twoColWithVideo_notification')}</Notification>
                    <Heading>{translate('twoColWithVideo_heading')}</Heading>
                    <Paragraph>{translate('twoColWithVideo_description')}</Paragraph>
                    <Actions>
                    <PrimaryButton onClick={toggleModal}>{translate('twoColWithVideo_primaryBtnTxt')}</PrimaryButton>
                    </Actions>
                </LeftColumn>
                <RightColumn>
                    <StyledResponsiveVideoEmbed
                        url={(state.siteLang === "en-US") ? "https://www.youtube.com/embed/BK5eQkkHFqo" : "https://www.youtube.com//embed/FPKmbYpgPvo"}
                        background="transparent"
                    />
                </RightColumn>
            </TwoColumn>
        </HeroContainer>
        <DecoratorBlob1 />
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
              <Quote/>
          </div>
        </StyledModal>
      </Container>
    </>
  );
};