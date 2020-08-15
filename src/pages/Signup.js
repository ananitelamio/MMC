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
import { css } from "styled-components/macro"; //eslint-disable-line
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

const Container = tw(ContainerBase)`min-h-screen bg-secondaryBlue-600 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-2/3 xl:w-2/3 p-6 sm:p-12`;
const LogoImage = tw.img`mx-auto h-40`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const Form = tw.form`mx-auto flex flex-col`;
const InputsRow = tw.div`-mx-3 md:flex mb-6`;
const InputWrapper = tw.div`md:w-1/2 px-3 mb-6 md:mb-0`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm hocus:shadow-md focus:outline-none focus:border-gray-400 focus:bg-white mt-5 `;
const Select = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm hocus:shadow-md focus:outline-none focus:border-gray-400 focus:bg-white mt-5`;
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

const Countries = [
    "Congo",
    "Cameroon",
    "Benin",
    "Ivory Coast",
    "Senegal",
    "Ghana"
];

const originCountries = {
    "Congo": "COG",
    "Cameroon": "CMR",
    "Benin": "BEN",
    "Ivory Coast": "CIV",
    "Senegal": "SEN",
    "Ghana": "GHA"
};

const Nationalities = [
"Afghan",
"Albanian",
"Algerian",
"American",
"Andorran",
"Angolan",
"Antiguans",
"Argentinean",
"Armenian",
"Australian",
"Austrian",
"Azerbaijani",
"Bahamian",
"Bahraini",
"Bangladeshi",
"Barbadian",
"Barbudans",
"Batswana",
"Belarusian",
"Belgian",
"Belizean",
"Beninese",
"Bhutanese",
"Bolivian",
"Bosnian",
"Brazilian",
"British",
"Bruneian",
"Bulgarian",
"Burkinabe",
"Burmese",
"Burundian",
"Cambodian",
"Cameroonian",
"Canadian",
"Cape Verdean",
"Central African",
"Chadian",
"Chilean",
"Chinese",
"Colombian",
"Comoran",
"Congolese",
"Costa Rican",
"Croatian",
"Cuban",
"Cypriot",
"Czech",
"Danish",
"Djibouti",
"Dominican",
"Dutch",
"East Timorese",
"Ecuadorean",
"Egyptian",
"Emirian",
"Equatorial Guinean",
"Eritrean",
"Estonian",
"Ethiopian",
"Fijian",
"Filipino",
"Finnish",
"French",
"Gabonese",
"Gambian",
"Georgian",
"German",
"Ghanaian",
"Greek",
"Grenadian",
"Guatemalan",
"Guinea-Bissauan",
"Guinean",
"Guyanese",
"Haitian",
"Herzegovinian",
"Honduran",
"Hungarian",
"Icelander",
"Indian",
"Indonesian",
"Iranian",
"Iraqi",
"Irish",
"Israeli",
"Italian",
"Ivorian",
"Jamaican",
"Japanese",
"Jordanian",
"Kazakhstani",
"Kenyan",
"Kittian and Nevisian",
"Kuwaiti",
"Kyrgyz",
"Laotian",
"Latvian",
"Lebanese",
"Liberian",
"Libyan",
"Liechtensteiner",
"Lithuanian",
"Luxembourger",
"Macedonian",
"Malagasy",
"Malawian",
"Malaysian",
"Maldivan",
"Malian",
"Maltese",
"Marshallese",
"Mauritanian",
"Mauritian",
"Mexican",
"Micronesian",
"Moldovan",
"Monacan",
"Mongolian",
"Moroccan",
"Mosotho",
"Motswana",
"Mozambican",
"Namibian",
"Nauruan",
"Nepalese",
"New Zealander",
"Ni-Vanuatu",
"Nicaraguan",
"Nigerian",
"Nigerien",
"North Korean",
"Northern Irish",
"Norwegian",
"Omani",
"Pakistani",
"Palauan",
"Panamanian",
"Papua New Guinean",
"Paraguayan",
"Peruvian",
"Polish",
"Portuguese",
"Qatari",                   
"Romanian",
"Russian",
"Rwandan",
"Saint Lucian",
"Salvadoran",
"Samoan",
"San Marinese",
"Sao Tomean",
"Saudi",
"Scottish",
"Senegalese",
"Serbian",
"Seychellois",
"Sierra Leonean",
"Singaporean",
"Slovakian",
"Slovenian",
"Solomon Islander",
"Somali",
"South African",
"South Korean",
"Spanish",
"Sri Lankan",
"Sudanese",
"Surinamer",
"Swazi",
"Swedish",
"Swiss",
"Syrian",
"Taiwanese",
"Tajik",
"Tanzanian",
"Thai",
"Togolese",
"Tongan",
"Trinidadian or Tobagonian",
"Tunisian",
"Turkish",
"Tuvaluan",
"Ugandan",
"Ukrainian",
"Uruguayan",
"Uzbekistani",
"Venezuelan",
"Vietnamese",
"Welsh",
"Yemenite",
"Zambian",
"Zimbabwean"
];

const validationSchema = Yup.object().shape({
  firstName: Yup
    .string()
    .required("A firstname is required")
    .min(2, "Firstame must be at least 2 characters"),
  address: Yup
    .string()
    .required("Your address is required"),
  dialingCode: Yup
    .number()
    .required("Please supply a valid country code"),
  phone: Yup
    .number()
    .required("Phone number is required"),
  email: Yup
    .string()
    .email()
    .required("Email is a required field"),
  password: Yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: Yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
    })
});

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  dob: "",
  customerGender: "",
  address: "",
  city: "",
  postcode: "",
  nationality: "",
  country: "",
  dialingCode:"",
  phone: ""
};

toast.configure();

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
    const temp = data.address;

    delete data.address;

    data.address = {
        "address1": temp,
        "city": data.city,
        "countryCommonName": data.country,
        "postcode": data.postcode,
        "countryIso3": originCountries[data.country]
    };

    data.customerType = "INDIVIDUAL";

    delete data.city;
    delete data.country;
    delete data.postcode;

    moneyTransfer.registerCustomer(data)
      .then(response => {

        if(response.data.status === "SUCCESS"){
          toast.success("Your account was created successfully. Attempting Auto Login" ,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            });

            const payload = {
                action: "login",
                data: {
                    password: data.password,
                    email: data.email,
                    platform: "Windows",
                    uuid: "359698060043864"
                }
            };

            moneyTransfer.login(payload)
            .then(response => {
                if(response.data.status === "SUCCESS"){
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
  headingText = "Sign Up To My Mobile Cash",
  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
}) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    
    const emailProps = formik.getFieldProps("email");
    const passwordProps = formik.getFieldProps("password");
    const confirmPasswordProps = formik.getFieldProps("confirmPassword");
    const firstNameProps = formik.getFieldProps("firstName");
    const lastNameProps = formik.getFieldProps("lastName");
    const dobProps = formik.getFieldProps("dob");
    const customerGenderProps = formik.getFieldProps("customerGender");
    const addressProps = formik.getFieldProps("address");
    const cityProps = formik.getFieldProps("city");
    const postcodeProps = formik.getFieldProps("postcode");
    const nationalityProps = formik.getFieldProps("nationality");
    const countryProps = formik.getFieldProps("country");
    const dialingCodeProps = formik.getFieldProps("dialingCode");
    const phoneProps = formik.getFieldProps("phone");

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
                <InputsRow>
                    <InputWrapper>
                        <Input name="email" type="email" placeholder="Email" {...emailProps} />
                        {formik.touched.email && formik.errors.email ? (<Error>{formik.errors.email}</Error>): null}
                    </InputWrapper>

                    <InputWrapper>
                        <Input name="address" type="address" placeholder="Address" {...addressProps}/>
                        {formik.touched.address && formik.errors.address ? (<Error>{formik.errors.address}</Error>): null}
                    </InputWrapper>
                </InputsRow>
                
                <InputsRow>
                    <InputWrapper>
                        <Input name="password" type="password" placeholder="Password" {...passwordProps} />
                        {formik.touched.password && formik.errors.password ? (<Error>{formik.errors.password}</Error>): null}
                    </InputWrapper>

                    <InputWrapper>
                        <Input name="city" type="city" placeholder="City" {...cityProps}/>
                        {formik.touched.city && formik.errors.city ? (<Error>{formik.errors.city}</Error>): null}
                    </InputWrapper>
                </InputsRow>

                <InputsRow>
                    <InputWrapper>
                        <Input name="confirmPassword" type="password" placeholder="Confirm Password" {...confirmPasswordProps}/>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<Error>{formik.errors.confirmPassword}</Error>): null}
                    </InputWrapper>

                    <InputWrapper>
                        <Input name="postcode" type="postcode" placeholder="Post Code" {...postcodeProps}/>
                        {formik.touched.postcode && formik.errors.postcode ? (<Error>{formik.errors.postcode}</Error>): null}
                    </InputWrapper>
                </InputsRow>

                <InputsRow>
                    <InputWrapper>
                        <Input name="firstName" type="firstname" placeholder="First name" {...firstNameProps}/>
                        {formik.touched.firstName && formik.errors.firstName ? (<Error>{formik.errors.firstName}</Error>): null}
                    </InputWrapper>

                    <InputWrapper>
                        <Select name="nationality" {...nationalityProps}>
                            {Nationalities.map(nationality => <option key={nationality}>{nationality}</option>)}
                        </Select>
                        {formik.touched.nationality && formik.errors.nationality ? (<Error>{formik.errors.nationality}</Error>): null}
                    </InputWrapper>
                </InputsRow>

                <InputsRow>
                    <InputWrapper>
                        <Input name="lastName" type="lastname" placeholder="Last name" {...lastNameProps}/>
                        {formik.touched.lastName && formik.errors.lastName ? (<Error>{formik.errors.lastName}</Error>): null}
                    </InputWrapper>

                    <InputWrapper>
                        <Select name="country" {...countryProps}>
                            {Countries.map(country => <option key={country}>{country}</option>)}
                        </Select>
                        {formik.touched.country && formik.errors.country ? (<Error>{formik.errors.country}</Error>): null}
                    </InputWrapper>
                </InputsRow>

                <InputsRow>
                    <InputWrapper>
                        <Input name="dob" type="date" placeholder="Birthdate" {...dobProps}/>
                        {formik.touched.dob && formik.errors.dob ? (<Error>{formik.errors.dob}</Error>): null}
                    </InputWrapper>

                    <InputWrapper>
                        <Input name="dialingCode" type="number" placeholder="Country Code" {...dialingCodeProps}/>
                        {formik.touched.dialingCode && formik.errors.dialingCode ? (<Error>{formik.errors.dialingCode}</Error>): null}
                    </InputWrapper>
                    
                    <InputWrapper>
                        <Input name="phone" type="number" placeholder="Phone number" {...phoneProps}/>
                        {formik.touched.phone && formik.errors.phone ? (<Error>{formik.errors.phone}</Error>): null}
                    </InputWrapper>
                </InputsRow>

                <InputsRow>
                    <InputWrapper>
                        <Select name="customerGender" {...customerGenderProps}>
                            <option>Gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </Select>
                        {formik.touched.customerGender && formik.errors.customerGender ? (<Error>{formik.errors.customerGender}</Error>): null}
                    </InputWrapper>
                </InputsRow>
                
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by My Mobile Cash's{" "}
                  <Link to="/terms" tw="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </Link>{" "}
                  and its{" "}
                  <Link to="/privacy" tw="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </Link>
                </p>

                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>

                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link to="/login" tw="border-b border-gray-500 border-dotted">
                    Sign In
                  </Link>
                </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
)};