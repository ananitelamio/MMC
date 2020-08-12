import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moneyTransfer from "../services/moneyTransfer";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import illustration from "images/undraw_access_account_99n5.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

const Container = tw(ContainerBase)`min-h-screen bg-secondaryBlue-600 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-1/2 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-40 mx-auto`;
const MainContent = tw.div`flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm hocus:shadow-md focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Error = tw.div`text-red-400 text-sm`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-secondaryBlue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-secondaryBlue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const validationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email()
    .required("Email is a required field"),
  currentPassword: Yup
    .string()
    .required("Please enter your password")
});

const initialValues = {
  email: "",
  currentPassword: ""
};

function redirect(path, params) {
    console.log(params);

    var form = document.createElement('form');
        form.setAttribute('action', path);

    var InputFormEmail = document.createElement('input');
        InputFormEmail.setAttribute('id', 'userName');
        InputFormEmail.setAttribute('type', 'text');
        InputFormEmail.setAttribute('name', "email");
        InputFormEmail.setAttribute('value', params.data.email);

    var InputFormPassword = document.createElement('input');
        InputFormPassword.setAttribute('id', 'Password');
        InputFormPassword.setAttribute('type', 'password');
        InputFormPassword.setAttribute('name', "password");
        InputFormPassword.setAttribute('value', params.data.password);

    var InputFormSubmit = document.createElement('input');
        InputFormSubmit.setAttribute('id', 'login');
        InputFormSubmit.setAttribute('type', 'submit');

    form.appendChild(InputFormEmail);
    form.appendChild(InputFormPassword);
    form.appendChild(InputFormSubmit);

    document.body.appendChild(form);

    form.submit();
};

const onSubmit = (data) => {

    console.log(data);
    const payload = {
        action: "login",
        data: {
            password: data.currentPassword,
            email: data.email,
            platform: "Windows",
            uuid: "359698060043864"
        }
    };
    
    console.log(payload);

    moneyTransfer.login(payload)
      .then(response => {
        console.log(response);
        redirect('https://mymobilecash.themoneytransferapplication.com/external_login', payload);//?loginForm=loginForm&loginForm%3Aemail=MichaelLKirkley%40dayrep.com&loginForm%3Apassword=Combat2coq%21&loginForm%3AagentCommandButton=Log+In&javax.faces.ViewState=gKZQQu0CBdE0%2FNYZmXfF51sD8IEIV1BuAc6o%2BS7lpai9F1SP3lkjTFwr3GwoKgqY85UT%2Bf0bsWzYVYwuxbVgyX8mztqoDZfzqFqTE46zFab3GWfMC3qNcW2sJ4CDHTXZ8qBBBwFe%2BnU8NZy0rJAtMWGHnqUBYgpfINzUSavUWJYDJByGFxax85CxXsA5g8RaIbimx5d9Lt%2FW%2BZCfwpwViyZTX%2F4irEdJS42JEqD7CR1yWLhJZAAUu8%2FZOz9AH%2B11%2FuyUNnlXrmwRKI0q9ySS7T3UDImK3h8A7MmNlvfmFynbhQ49sFt4ImcoojrtcfN%2FHIRv6rHn6nJlCi%2BqIBmEfJ1dD2g40HHVIjdUvjTPMztG3AUCzSkZ27FqUkfza6EznGsMuKHpYCa%2FyzkS23tBm5KgmzBVsVKG8BpN0LqrL%2BuDLDeEQ3lTV12Xxphkvoaba9E%2BsyWNQhVZdmosuLekNY6bI%2BwFPJNVkaLmxwk%2FAzk%2FU7bK%2BGIIK%2Fn9kpuYtH6trtw%2BRE10FJKQR9LJvwWB85bfGV5ML8ySAVRiWAk0zdUQ2KJeSQRcZVxfa%2FWAISHdn1vssxHcky37FCe4r1YDeTGHYm1zNuBIxoM7B2Qo6CR%2BuNDKM4FNgGkT4UqnljuJBhLciWA7wqh8OlcaU7pbCYitf6srRRPdV6l8e%2BU6WwAlbuSkr6h7wn5CbRs4UlG9SfQoLGmI6UPPd%2FcWoF9p2cXFFBFEMUNxy6yUNHzDUPDHE2N2hXiCUqk99M7DgS87H%2FtZY5QvgyOgfScpUVs27Nv9pk1Dp1aFt4fZna3%2FCgZAZt%2B%2B8G0VCLF%2BaKSMDHPURpHiDymL9xLahOG7prW6IYMQ7U4g8AIWhmiJpUes4ZtFEHlTxqLBF8xxwGqs%2F66dQt%2FwxivBuekiHGTxlwBj5KLnpaU5OCK2OwWi8qEP0WWMBpiH4PQwL5otJ6ENwh6Bbc1ZQMWoCzUI%2Fg%2F%2FcdKZEJNtXJqlk5JzjJkOBEthX3tLYfDrfFDvyI4tWUkhSD359GbsUlwsUrTrXLNhkhCTt2zqOlvV%2FAhVgV7INvQSbRvwzjU8Hqf5KSvUJQ2ycd8UE3jxu%2FQUMcgaTycAAHXNDFT3wxnLQalY%2BBLwYskDOn6Nla%2FasrkMBFGqdikufGmJ1orxexMVLczyMxPnOi3WJhtXkEUc4HnD5EelMcOhgnaUmAbmx35Xz5%2Ffx1D1XhEHhM4UPE3pR2u97OBmkIvADhnd9G%2BdG9K5QZo7rKSk9O24OkfxD%2FaUt%2B2XZyDDVURbHlFvtoAr%2FnV5YwziPfVVxqiIEBLrGu%2FCohhx5VJgX%2BfX3jP7hXL6PGM2BDY%2BWtzi8W7DuO5HENToCXL8D0jcX8rbCByNJIu7X4Th%2B3FbMPLsut9quXJBdi7RSCWbvBYQV%2FYI7oVMu0vqACaNtIGI4QucpjRGaFupNnx6Xsjp3QGV53nscrcDjTJ%2BhhBdcBSP2%2FHBvN3UH7It0XqTO4iGCCN2%2FMsDbTVj2eyYik%2F2pT%2BSiS05xqZFAlth4IXIwMJpiIYmXR8wyVwFaZm5izcYrb6qT70nxzbsqR0BhmOk3m2uNccpV1EsKHG7yEXFrmkZsyAkrVzIxvppxcxz7sIWog%3D%3D";
      })
      .catch(e => {
        console.log(e);
      });
  };

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Sign In To My Mobile Cash",
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "https://mymobilecash.themoneytransferapplication.com/forgot-password.xhtml",
  signupUrl = "/sign-up",

}) => {
  const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    
    const emailProps = formik.getFieldProps("email");
    const currentPasswordProps = formik.getFieldProps("currentPassword");

return (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <Form onSubmit={formik.handleSubmit}>
                <Input type="email" placeholder="Email" name="email" {...emailProps} />
                {formik.touched.email && formik.errors.email ? (<Error>{formik.errors.email}</Error>): null}

                <Input type="password" placeholder="Password" name="currentPassword" {...currentPasswordProps} />
                {formik.touched.currentPassword && formik.errors.currentPassword ? (<Error>{formik.errors.currentPassword}</Error>): null}

                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
              </Form>
              <p tw="mt-6 text-xs text-gray-600 text-center">
                <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                  Forgot Password ?
                </a>
              </p>
              <p tw="mt-8 text-sm text-gray-600 text-center">
                Dont have an account?{" "}
                <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
                  Sign Up
                </a>
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>)
};