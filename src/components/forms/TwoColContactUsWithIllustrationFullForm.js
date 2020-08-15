import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/support.svg";
import { toast } from 'react-toastify';

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

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const InputWrapper = tw.div`px-3 mt-6`;
const Input = tw.input`w-full first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-secondaryBlue`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`
const Error = tw.div`text-red-400 text-sm`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

const validationSchema = Yup.object().shape({
  name: Yup
    .string()
    .required("Your full name is required")
    .min(2, "Firstame must be at least 2 characters"),
  email: Yup
    .string()
    .email()
    .required("Email is a required field"),
  phone: Yup
    .number()
    .required("Phone number is required"),
  subject: Yup
    .string()
    .required("A subject is required")
    .min(8, "The subject should be at least 8 characters long"),
  message: Yup
    .string()
    .required("A message is required")
    .min(8, "The message should be at least 8 characters long"),
    
});

const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client({ apiKey: '16239a52-1612-4736-9d47-735929ad6217', basePath: 'https://cors-anywhere.herokuapp.com/https://api.hubapi.com/'});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};

toast.configure();

const onSubmit = (data) => {
    
    hubspotClient.crm.contacts.basicApi.create({ properties: { firstname: data.name, email: data.email, phone: data.phone, message: data.message} })
    .then(response => {
          toast.success("Our team will contact you, Cheers!",{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      })
      .catch(e => {
        console.log(e);
        toast.error("Contact already exists",{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });
};

export default ({
  subheading = "Contact Us",
  heading = <>Our team is at your disposal <wbr/> <span tw="text-primaryOrange-500">to answer your questions.</span></>,
  description = "",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    
    const nameProps = formik.getFieldProps("name");
    const emailProps = formik.getFieldProps("email");
    const phoneProps = formik.getFieldProps("phone");
    const subjectProps = formik.getFieldProps("subject");
    const messageProps = formik.getFieldProps("message");

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
            {description.length ? <Description>{description}</Description> : null }
            <Form onSubmit={formik.handleSubmit}>
              <InputWrapper>
                <Input type="text" name="name" placeholder="Full Name" {...nameProps}/>
                {formik.touched.name && formik.errors.name ? (<Error>{formik.errors.name}</Error>): null}
              </InputWrapper>
              <InputWrapper>
                <Input type="email" name="email" placeholder="Your Email Address" {...emailProps}/>
                {formik.touched.email && formik.errors.email ? (<Error>{formik.errors.email}</Error>): null}
              </InputWrapper>
              <InputWrapper>
                <Input type="number" name="numero" placeholder="Phone Number" {...phoneProps}/>
                {formik.touched.number && formik.errors.number ? (<Error>{formik.errors.number}</Error>): null}
              </InputWrapper>
              <InputWrapper>
                <Input type="text" name="subject" placeholder="Subject" {...subjectProps}/>
                {formik.touched.subject && formik.errors.subject ? (<Error>{formik.errors.subject}</Error>): null}
              </InputWrapper>
              <InputWrapper>
                <Textarea name="message" placeholder="Your Message Here" {...messageProps}/>
                {formik.touched.message && formik.errors.message ? (<Error>{formik.errors.message}</Error>): null}
              </InputWrapper>
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};