import React, { useContext } from "react";
import {AppContext} from "../../providers/context";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { Container } from "components/misc/Layouts";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-secondaryBlue-600 rounded-lg relative`
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;

const LinksContainer = tw(ColumnContainer)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const LinkButton = tw(Link)`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(LinkButton)`bg-green-500 text-gray-100 shadow-lg hocus:bg-green-600 hocus:text-gray-200`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-secondaryBlue-300 opacity-50`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-secondaryBlue-300 opacity-50`
export default ({
  text = translate("getStarted_text"),
  primaryLinkText = translate("getStarted_link")
}) => {
  const { state } = useContext(AppContext);

  const handleClick = () => {
    state.deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    state.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  }
    
  return (
    <Container css={tw`mb-12 lg:mb-20`}>
      <PrimaryBackgroundContainer>
        <Row>
          <TextContainer>
            <Text>{text}</Text>
          </TextContainer>
          <LinksContainer>
            <PrimaryLink to="#" onClick={handleClick}>{primaryLinkText}</PrimaryLink>
          </LinksContainer>
        </Row>
        <DecoratorBlobContainer>
          <DecoratorBlob1/>
          <DecoratorBlob2/>
        </DecoratorBlobContainer>
      </PrimaryBackgroundContainer>
    </Container>
  );
};