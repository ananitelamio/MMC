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
export default ({ headingText = translate("privacy_heading") }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>{translate("privacy_last_update")}</p>

            <p>
              {translate("privacy_p1")}
            </p>

            <p>
              {translate("privacy_p2")}
            </p>

            <h1>{translate("privacy_h1_1")}</h1>
            <h2>{translate("privacy_h2_1")}</h2>
            <p>
              {translate("privacy_p3")}
            </p>
            <p>
              {translate("privacy_p4")}
            </p>

            <h2>{translate("privacy_h2_2")}</h2>
            <p>{translate("privacy_p5")}</p>
            <ul>
              <li>
                <p>
                  {translate("privacy_p6", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
                </p>
              </li>
              <li>
                <p>
                  {translate("privacy_p7", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
                </p>
              </li>
              <li>
                {translate("privacy_li_1", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_2", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_3", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>{" "}
              <li>
                {translate("privacy_li_4", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_5", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                <p>
                  {translate("privacy_li_6", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
                </p>
              </li>
              <li>
                {translate("privacy_li_7", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                <p>
                  {translate("privacy_li_8", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
                </p>
              </li>
              <li>
                {translate("privacy_li_9", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>{" "}
              <li>
                {translate("privacy_li_10", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
            </ul>

            <h1>{translate("privacy_h1_2")}</h1>
            <h2>{translate("privacy_h2_3")}</h2>

            <h3>{translate("privacy_h3_1")}</h3>
            <p>
              {translate("privacy_p8")}
            </p>
            <ul>
              {translate("privacy_li_11", {
                  li: chunks => <li>{chunks}</li>
                })}{" "}
              {translate("privacy_li_12", {
                  li: chunks => <li>{chunks}</li>
                })}
            </ul>

            <h3>{translate("privacy_h3_2")}</h3>
            <p>{translate("privacy_p9")}</p>
            <p>
              {translate("privacy_p10")}
            </p>
            <p>
              {translate("privacy_p11")}
            </p>
            <p>
              {translate("privacy_p12")}
            </p>

            <h3>{translate("privacy_h3_3")}</h3>
            <p>
              {translate("privacy_p13")}
            </p>
            <p>
              {translate("privacy_p14")}
            </p>
            <p>
              {translate("privacy_p15")}
            </p>
            <p>{translate("privacy_p16")}</p>
            <ul>
              <li>
                <p>
                  {translate("privacy_p17", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
                </p>
                <p>{translate("privacy_p18")}</p>
                <p>{translate("privacy_p19")}</p>
                <p>
                  {translate("privacy_p20")}
                </p>
              </li>
              <li>
                <p>
                  {translate("privacy_p21", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
                </p>
                <p>{translate("privacy_p22")}</p>
                <p>{translate("privacy_p23")}</p>
                <p>{translate("privacy_p24")}</p>
              </li>
              <li>
                <p>
                  {translate("privacy_p25", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
                </p>
                <p>{translate("privacy_p26")}</p>
                <p>{translate("privacy_p27")}</p>
                <p>
                  {translate("privacy_p28")}
                </p>
              </li>
            </ul>
            <p>
              {translate("privacy_p29")}
            </p>

            <h2>{translate("privacy_h2_4")}</h2>
            <p>{translate("privacy_p30")}</p>
            <ul>
              <li>
                {translate("privacy_li_13", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_14", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_15", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_16", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_17", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_18", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
            </ul>

            <p>{translate("privacy_p31")}</p>

            <ul>
              <li>
                {translate("privacy_li_19", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_20", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_21", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_22", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {translate("privacy_li_23", {
                  strong: chunks => <strong>{chunks}</strong>
                })}
              </li>
            </ul>

            <h2>{translate("privacy_h2_5")}</h2>
            <p>
              {translate("privacy_p32")}
            </p>
            <p>
              {translate("privacy_p33")}
            </p>

            <h2>{translate("privacy_h2_6")}</h2>
            <p>
              {translate("privacy_p34")}
            </p>
            <p>
              {translate("privacy_p35")}
            </p>
            <p>
              {translate("privacy_p36")}
            </p>

            <h2>{translate("privacy_h2_7")}</h2>
            <h3>{translate("privacy_h3_4")}</h3>
            <p>
              {translate("privacy_p37")}
            </p>
            <h3>{translate("privacy_h3_5")}</h3>
            <p>
              {translate("privacy_p38")}
            </p>
            <h3>{translate("privacy_h3_6")}</h3>
            <p>
              {translate("privacy_p39")}
            </p>
            <ul>
              <li>{translate("privacy_li_24")}</li>
              <li>{translate("privacy_li_25")}</li>
              <li>{translate("privacy_li_26")}</li>
              <li>{translate("privacy_li_27")}</li>
              <li>{translate("privacy_li_28")}</li>
            </ul>

            <h2>{translate("privacy_h2_8")}</h2>
            <p>
              {translate("privacy_p40")}
            </p>

            <h1>{translate("privacy_h1_3")}</h1>
            <p>
              {translate("privacy_p41")}
            </p>
            <p>
              {translate("privacy_p42")}
            </p>

            <h1>{translate("privacy_h1_4")}</h1>
            <p>
              {translate("privacy_p43")}
            </p>
            <p>
              {translate("privacy_p44")}
            </p>

            <h1>{translate("privacy_h1_5")}</h1>
            <p>
              {translate("privacy_p45")}
            </p>
            <p>
              {translate("privacy_p46")}
            </p>
            <p>
              {translate("privacy_p47")}
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};