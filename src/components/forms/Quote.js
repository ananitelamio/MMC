import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
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

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
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

const OC = [
        {
            "iso3Code": "COG",
            "iso2Code": null,
            "common_name": "Congo",
            "flag": "https://mta-assets.themoneytransferapplication.com/flags/COG.png",
            "telephoneCode": null,
            "capital": null,
            "currencyCode": null,
            "currencySymbol": null,
            "delivery_methods": null,
            "destinationCountries": [
                {
                    "iso3Code": "BEN",
                    "iso2Code": null,
                    "common_name": "Benin",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Benin.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "CMR",
                    "iso2Code": null,
                    "common_name": "Cameroon",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Cameroon.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "CAF",
                    "iso2Code": null,
                    "common_name": "Central African Republic",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Central African Republic.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "COG",
                    "iso2Code": null,
                    "common_name": "Congo",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Congo.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "CIV",
                    "iso2Code": null,
                    "common_name": "Ivory Coast",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Ivory Coast.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "KEN",
                    "iso2Code": null,
                    "common_name": "Kenya",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Kenya.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "MLI",
                    "iso2Code": null,
                    "common_name": "Mali",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Mali.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "MAR",
                    "iso2Code": null,
                    "common_name": "Morocco",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Morocco.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "NGA",
                    "iso2Code": null,
                    "common_name": "Nigeria",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Nigeria.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null,
                            "senderCurrencies": [
                                "XAF"
                            ],
                            "receiverCurrencies": [
                                "NGN"
                            ]
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null,
                            "currencies": [
                                "XAF"
                            ],
                            "receiverCurrencies": [
                                "NGN"
                            ]
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null,
                            "currencies": [
                                "XAF"
                            ],
                            "receiverCurrencies": [
                                "NGN"
                            ]
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "BILL_PAYMENT",
                            "label": "BILL PAYMENT",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "RWA",
                    "iso2Code": null,
                    "common_name": "Rwanda",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Rwanda.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "SEN",
                    "iso2Code": null,
                    "common_name": "Senegal",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Senegal.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "ZAF",
                    "iso2Code": null,
                    "common_name": "South Africa",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/South Africa.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "BILL_PAYMENT",
                            "label": "BILL PAYMENT",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "UGA",
                    "iso2Code": null,
                    "common_name": "Uganda",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Uganda.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                },
                {
                    "iso3Code": "ZMB",
                    "iso2Code": null,
                    "common_name": "Zambia",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Zambia.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": [
                        {
                            "name": "ACCOUNTPAYMENT",
                            "label": "Bank Transfer",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "CASHPICKUP",
                            "label": "Cash Pickup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "MOBILE_MONEY",
                            "label": "Mobile Money",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        },
                        {
                            "name": "AIRTIME_TOPUP",
                            "label": "Airtime Topup",
                            "allowNoneMemberToBookDeliveryMethod": false,
                            "originating_currenies": null
                        }
                    ]
                }
            ]
        },
        {
            "iso3Code": "CMR",
            "iso2Code": null,
            "common_name": "Cameroon",
            "flag": "https://mta-assets.themoneytransferapplication.com/flags/CMR.png",
            "telephoneCode": null,
            "capital": null,
            "currencyCode": null,
            "currencySymbol": null,
            "delivery_methods": null,
            "destinationCountries": [
                {
                    "iso3Code": "BEN",
                    "iso2Code": null,
                    "common_name": "Benin",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Benin.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CMR",
                    "iso2Code": null,
                    "common_name": "Cameroon",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Cameroon.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CAF",
                    "iso2Code": null,
                    "common_name": "Central African Republic",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Central African Republic.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "COG",
                    "iso2Code": null,
                    "common_name": "Congo",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Congo.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "GHA",
                    "iso2Code": null,
                    "common_name": "Ghana",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Ghana.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CIV",
                    "iso2Code": null,
                    "common_name": "Ivory Coast",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Ivory Coast.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "KEN",
                    "iso2Code": null,
                    "common_name": "Kenya",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Kenya.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "MLI",
                    "iso2Code": null,
                    "common_name": "Mali",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Mali.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "MAR",
                    "iso2Code": null,
                    "common_name": "Morocco",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Morocco.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "NGA",
                    "iso2Code": null,
                    "common_name": "Nigeria",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Nigeria.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "RWA",
                    "iso2Code": null,
                    "common_name": "Rwanda",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Rwanda.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "SEN",
                    "iso2Code": null,
                    "common_name": "Senegal",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Senegal.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "ZAF",
                    "iso2Code": null,
                    "common_name": "South Africa",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/South Africa.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "UGA",
                    "iso2Code": null,
                    "common_name": "Uganda",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Uganda.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "ZMB",
                    "iso2Code": null,
                    "common_name": "Zambia",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Zambia.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                }
            ]
        },
        {
            "iso3Code": "BEN",
            "iso2Code": null,
            "common_name": "Benin",
            "flag": "https://mta-assets.themoneytransferapplication.com/flags/BEN.png",
            "telephoneCode": null,
            "capital": null,
            "currencyCode": null,
            "currencySymbol": null,
            "delivery_methods": null,
            "destinationCountries": [
                {
                    "iso3Code": "BEN",
                    "iso2Code": null,
                    "common_name": "Benin",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Benin.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CMR",
                    "iso2Code": null,
                    "common_name": "Cameroon",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Cameroon.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CAF",
                    "iso2Code": null,
                    "common_name": "Central African Republic",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Central African Republic.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "COG",
                    "iso2Code": null,
                    "common_name": "Congo",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Congo.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CUB",
                    "iso2Code": null,
                    "common_name": "Cuba",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Cuba.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "COD",
                    "iso2Code": null,
                    "common_name": "Democratic Republic of the Congo",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Democratic Republic of the Congo.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "FRA",
                    "iso2Code": null,
                    "common_name": "France",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/France.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "GHA",
                    "iso2Code": null,
                    "common_name": "Ghana",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Ghana.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CIV",
                    "iso2Code": null,
                    "common_name": "Ivory Coast",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Ivory Coast.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "KEN",
                    "iso2Code": null,
                    "common_name": "Kenya",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Kenya.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "MLI",
                    "iso2Code": null,
                    "common_name": "Mali",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Mali.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "MAR",
                    "iso2Code": null,
                    "common_name": "Morocco",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Morocco.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "NGA",
                    "iso2Code": null,
                    "common_name": "Nigeria",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Nigeria.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "RWA",
                    "iso2Code": null,
                    "common_name": "Rwanda",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Rwanda.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "SEN",
                    "iso2Code": null,
                    "common_name": "Senegal",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Senegal.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "ZAF",
                    "iso2Code": null,
                    "common_name": "South Africa",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/South Africa.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "UGA",
                    "iso2Code": null,
                    "common_name": "Uganda",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Uganda.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "ZMB",
                    "iso2Code": null,
                    "common_name": "Zambia",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Zambia.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                }
            ]
        },
        {
            "iso3Code": "CIV",
            "iso2Code": null,
            "common_name": "Ivory Coast",
            "flag": "https://mta-assets.themoneytransferapplication.com/flags/CIV.png",
            "telephoneCode": null,
            "capital": null,
            "currencyCode": null,
            "currencySymbol": null,
            "delivery_methods": null,
            "destinationCountries": [
                {
                    "iso3Code": "BEN",
                    "iso2Code": null,
                    "common_name": "Benin",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Benin.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CMR",
                    "iso2Code": null,
                    "common_name": "Cameroon",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Cameroon.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CAF",
                    "iso2Code": null,
                    "common_name": "Central African Republic",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Central African Republic.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "COG",
                    "iso2Code": null,
                    "common_name": "Congo",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Congo.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CUB",
                    "iso2Code": null,
                    "common_name": "Cuba",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Cuba.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "COD",
                    "iso2Code": null,
                    "common_name": "Democratic Republic of the Congo",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Democratic Republic of the Congo.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "FRA",
                    "iso2Code": null,
                    "common_name": "France",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/France.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "GHA",
                    "iso2Code": null,
                    "common_name": "Ghana",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Ghana.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CIV",
                    "iso2Code": null,
                    "common_name": "Ivory Coast",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Ivory Coast.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "KEN",
                    "iso2Code": null,
                    "common_name": "Kenya",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Kenya.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "MLI",
                    "iso2Code": null,
                    "common_name": "Mali",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Mali.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "MAR",
                    "iso2Code": null,
                    "common_name": "Morocco",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Morocco.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "NGA",
                    "iso2Code": null,
                    "common_name": "Nigeria",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Nigeria.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "RWA",
                    "iso2Code": null,
                    "common_name": "Rwanda",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Rwanda.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "SEN",
                    "iso2Code": null,
                    "common_name": "Senegal",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Senegal.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "ZAF",
                    "iso2Code": null,
                    "common_name": "South Africa",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/South Africa.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "UGA",
                    "iso2Code": null,
                    "common_name": "Uganda",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Uganda.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "ZMB",
                    "iso2Code": null,
                    "common_name": "Zambia",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Zambia.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                }
            ]
        },
        {
            "iso3Code": "SEN",
            "iso2Code": null,
            "common_name": "Senegal",
            "flag": "https://mta-assets.themoneytransferapplication.com/flags/SEN.png",
            "telephoneCode": null,
            "capital": null,
            "currencyCode": null,
            "currencySymbol": null,
            "delivery_methods": null,
            "destinationCountries": [
                {
                    "iso3Code": "BEN",
                    "iso2Code": null,
                    "common_name": "Benin",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Benin.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "CMR",
                    "iso2Code": null,
                    "common_name": "Cameroon",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Cameroon.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "COG",
                    "iso2Code": null,
                    "common_name": "Congo",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Congo.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                },
                {
                    "iso3Code": "SEN",
                    "iso2Code": null,
                    "common_name": "Senegal",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Senegal.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                }
            ]
        },
        {
            "iso3Code": "GHA",
            "iso2Code": null,
            "common_name": "Ghana",
            "flag": "https://mta-assets.themoneytransferapplication.com/flags/GHA.png",
            "telephoneCode": null,
            "capital": null,
            "currencyCode": null,
            "currencySymbol": null,
            "delivery_methods": null,
            "destinationCountries":  [
                {
                    "iso3Code": "GHA",
                    "iso2Code": null,
                    "common_name": "Ghana",
                    "flag": "https://mta-assets.themoneytransferapplication.com/flags/Ghana.png",
                    "telephoneCode": null,
                    "capital": null,
                    "currencyCode": null,
                    "currencySymbol": null,
                    "delivery_methods": null
                }
            ]
        }
    ];



export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Get a quote now",
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon

}) => {
  const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    });

    
    const emailProps = formik.getFieldProps("email");
    const currentPasswordProps = formik.getFieldProps("currentPassword");

    return (
        <AnimationRevealPage>
                <MainContent>
                    <Heading>{headingText}</Heading>
                    <FormContainer>
                    <Form onSubmit={formik.handleSubmit}>
                        <Input type="email" placeholder="Email" name="email" {...emailProps} />
                        {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>): null}

                        <Input type="password" placeholder="Password" name="currentPassword" {...currentPasswordProps} />
                        {formik.touched.currentPassword && formik.errors.currentPassword ? (<div>{formik.errors.currentPassword}</div>): null}

                        <SubmitButton type="submit">
                        <SubmitButtonIcon className="icon" />
                        <span className="text">{submitButtonText}</span>
                        </SubmitButton>
                    </Form>
                    </FormContainer>
                </MainContent>
        </AnimationRevealPage>)
};