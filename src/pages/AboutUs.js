import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import translate from "../i18n/translate";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnDark.js";
import MainFeature1 from "components/features/TwoColWith3P.js";
import GetStarted from "components/cta/GetStarted.js";

import OnlinePaymentsImage from "images/online-payments.png";
import SharedGoalsImage from "images/shared-goals.png";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        heading={translate("about_feature1_heading")}
        descriptionP1={translate("about_feature1_descriptionP1")}
        descriptionP2={translate("about_feature1_descriptionP2")}
        descriptionP3={translate("about_feature1_descriptionP3")}
        imageSrc={OnlinePaymentsImage}
      />
      <MainFeature1
        heading={translate("about_feature2_heading")}
        descriptionP1={translate("about_feature2_descriptionP1")}
        descriptionP2={translate("about_feature2_descriptionP2")}
        imageSrc={SharedGoalsImage}
        textOnLeft={false}
      />
      <GetStarted
      />
      <Footer />
    </AnimationRevealPage>
  );
};