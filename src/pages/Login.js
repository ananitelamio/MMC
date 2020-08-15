import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
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

toast.configure();

const onSubmit = (data) => {

    const payload = {
        action: "login",
        data: {
            password: data.currentPassword,
            email: data.email,
            platform: "Windows",
            uuid: "359698060043864"
        }
    };

    moneyTransfer.login(payload)
      .then(response => {
        if(response.data.status == "SUCCESS"){
          toast.success(response.data.message ,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            });
          redirect('https://mymobilecash.themoneytransferapplication.com/external_login', payload);
        } else {
          toast.error(response.data.message ,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            });
        }
        
      })
      .catch(e => {
        console.log(e);
        toast.error("Something went wront! Please try again. If the problem persisits, please contact customer service." ,{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
          });
      });
  };

export default ({
  illustrationImageSrc = illustration,
  headingText = "Sign In To My Mobile Cash",
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "https://mymobilecash.themoneytransferapplication.com/forgot-password.xhtml"

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
          <Link to="/">
            <LogoImage src={logo} />
          </Link>
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
                <Link to="/sign-up" tw="border-b border-gray-500 border-dotted">
                  Sign Up
                </Link>
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