import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import CreditRechargeIconImage from "../../images/credit-recharge.svg";
import MoneydIconImage from "../../images/money-transfer.svg";
import billsPaymentIconImage from "../../images/bills-payment.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ElectronicWalletIconImage from "../../images/electronic-wallet.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 rounded-lg mt-12 hover:shadow-2xl transition-shadow duration-1000 bg-secondaryBlue-100`}
  .imageContainer {
    ${tw`border-2 border-dashed border-secondaryBlue-600 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }
  .textContainer {
    ${tw`mt-6 text-center`}
  }
  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-secondaryBlue-600`}
  }
  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: MoneydIconImage,
      title: "Money transfer",
      description: "Transfer money from your home with one click. Mymobile Cash offers you a quick and cheaper solution to get closer to your family and business. With My Mobile Cash nothing is out of your reach. You can also have money delivered to your home."
    },
    { imageSrc: CreditRechargeIconImage, 
      title: "Recharge of credit",
      description: "Reload your My Mobile Cash account in one minute, top up credit at any time depending on your phone network and send phone credit from one country to another."  
    },
    { imageSrc: billsPaymentIconImage, 
      title: "Payment of bills",
      description: "Pay your bills from home directly on My Mobile Cash and save time at any time. You can also ask a close My Mobile Cash subscriber to pay your bill."
    },
    { imageSrc: ElectronicWalletIconImage, 
      title: "Electronic wallet",
      description: "Send and receive payments faster with your My Mobile Cash e-wallet. It's simple, convenient and efficient. Shop safely and reliably."
    }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-primaryOrange-500">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};