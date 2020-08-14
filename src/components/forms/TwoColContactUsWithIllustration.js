import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/subscriber.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-blue-400`

const Error = tw.div`text-red-400 text-sm`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`

const validationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email()
    .required("Email is a required field")
});

const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client({ apiKey: '16239a52-1612-4736-9d47-735929ad6217', basePath: 'https://cors-anywhere.herokuapp.com/https://api.hubapi.com/'});

const initialValues = {
  email: ""
};

const onSubmit = (data) => {

    console.log(data);
    
    hubspotClient.crm.contacts.basicApi.create({ properties: { email: data.email , subscribed: "subscribed" } })
    .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
};

export default ({
  subheading = "Stay up to date",
  heading = <>Feel free to <span tw="text-primaryOrange-500">Subscribe </span>and stay informed!<wbr/></>,
  description = "Stay informed about our latest services and innovations to serve you better.",
  submitButtonText = "I subscribe",
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    const emailProps = formik.getFieldProps("email");


  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Form onSubmit={formik.handleSubmit}>
              <Input type="email" name="email" placeholder="Your Email Address" {...emailProps}/>
                {formik.touched.email && formik.errors.email ? (<Error>{formik.errors.email}</Error>): null}
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};