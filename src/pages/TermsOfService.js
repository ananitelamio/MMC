import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import translate from "../i18n/translate";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnDark.js";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default ({ headingText = translate("terms_heading") }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>

            <p>{translate("terms_last_update")}</p>

            <p>{translate("terms_please_read")}</p>

            <h1>{translate("terms_h1_1")}</h1>
            <h2>{translate("terms_h2_1")}</h2>
            <p>
              {translate("terms_p1")}
            </p>
            <p>
              {translate("terms_p2")}
            </p>

            <h2>{translate("terms_h2_2")}</h2>
            <p>{translate("terms_p3")}</p>
            <ul>
              <li>
                {translate("terms_li1", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("terms_li2", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("terms_li3", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("terms_li4", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("terms_li5", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("terms_li6", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("terms_li7", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("terms_li8", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
            </ul>

            <h1>{translate("terms_h1_2")}</h1>
            <p>
              {translate("terms_p4")}
            </p>
            <p>
              {translate("terms_p5")}
            </p>
            <p>
              {translate("terms_p6")}
            </p>
            <p>
              {translate("terms_p7")}
            </p>
            <p>
              {translate("terms_p8")}
            </p>

            <h1>{translate("terms_h1_3.1")}</h1>
            <p>
              {translate("terms_p9")}
            </p>
            <p>
              {translate("terms_p10")}
            </p>
            <p>
              {translate("terms_p11")}
            </p>

            <h1>{translate("terms_h1_3")}</h1>
            <p>
              {translate("terms_p12")}
            </p>
            <p>{translate("terms_p13")}</p>

            <h1>{translate("terms_h1_4")}</h1>
            <p>
              {translate("terms_p14")}
            </p>
            <p>
              {translate("terms_p15")}
            </p>
            <p>
              {translate("terms_p16")}
            </p>

            <h1>{translate("terms_h1_5")}</h1>
            <p>
              {translate("terms_p17")}
            </p>
            <p>
              {translate("terms_p18")}
            </p>
            <p>
              {translate("terms_p19")}
            </p>

            <h1>{translate("terms_h1_6")}</h1>
            <p>
              {translate("terms_p20")}
            </p>

            <h1>{translate("terms_h1_7")}</h1>
            <p>
              {translate("terms_p21")}
            </p>

            <h1>{translate("terms_h1_8")}</h1>
            <p>
              {translate("terms_p22")}
            </p>

            <h1>{translate("terms_h1_9")}</h1>
            <p>
              {translate("terms_p23")}
            </p>

            <h1>{translate("terms_h1_10")}</h1>
            <h2>{translate("terms_h2_3")}</h2>
            <p>
              {translate("terms_p24")}
            </p>

            <h2>{translate("terms_h2_4")}</h2>
            <p>
              {translate("terms_p25")}
            </p>

            <h1>{translate("terms_h1_11")}</h1>
            <p>
              {translate("terms_p26")}
            </p>
            <p>{translate("terms_p27")}</p>

            <h1>{translate("terms_h1_12")}</h1>
            <p>
              {translate("terms_p28")}
            </p>
            <p>
              {translate("terms_p29")}
            </p>

            <h1>{translate("terms_h1_13")}</h1>
            <p>{translate("terms_p30")}</p>

            <ul>
              <li>{translate("terms_li9")}</li>
              <li>{translate("terms_li10")}</li>
            </ul>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};