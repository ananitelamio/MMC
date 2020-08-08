import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moneyTransfer from "../../services/moneyTransfer";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const Form = tw.form`mx-auto max-w-sm flex flex-col`;
const InputsRow = tw.div`flex justify-between`;
const InputCurrrency = tw.div`w-3/4`;
const InputAmount = tw.div`w-2/6`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm hocus:shadow-md focus:outline-none focus:border-gray-400 focus:bg-white mt-5 `;
const Select = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm hocus:shadow-md focus:outline-none focus:border-gray-400 focus:bg-white mt-5`;
const StatsRow = tw.div`flex justify-between mt-5`;
const Stats = tw.div`w-5/12`;
const StatTitle = tw.p`text-xs text-center`;
const StatInfo = tw.p`text-sm text-center`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-secondaryBlue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-secondaryBlue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;


const originCountries = [
        {
            "iso3Code": "COG",
            "common_name": "Congo"
        },
        {
            "iso3Code": "CMR",
            "common_name": "Cameroon"
        },
        {
            "iso3Code": "BEN",
            "common_name": "Benin"
        },
        {
            "iso3Code": "CIV",
            "common_name": "Ivory Coast"
        },
        {
            "iso3Code": "SEN",
            "common_name": "Senegal"
        },
        {
            "iso3Code": "GHA",
            "common_name": "Ghana"
        }
    ];

const initialValues = {
  originCountry: "",
  destinationOriginCountry: "",
  deliveryMethod: "",
  currency: "",
  deliveryCurrency: "",
  fromAmount: "",
  toAmount: ""
};

const payload = {
    chargeCategory: "MONEYTRANSFER",
    conversion: false,
    deriveAmount: 1,
    deriveAmountCurrency: "",
    destinationCountry: "",
    inverseCalculation: false,
    principalAmount: 1,
    principalAmountCurrency: "",
    tradeOriginatingCountry: "",
    transactionType: ""
};

export default ({
  headingText = "Send Money",
  submitButtonText = "GET STARTED",
  SubmitButtonIcon = LoginIcon
}) => {
  const formik = useFormik({
        initialValues,
        //validationSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    });

    const [destinationCountries, setdestinationCountries] = useState([]);
    const [deliveryMethods, setDeliveryMethods] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [deliveryCurrencies, setDeliveryCurrencies] = useState([]);
    const [fromAmount, setFromAmount] = useState([]);
    const [toAmount, setToAmount] = useState([]);
    
    const originCountryProps = formik.getFieldProps("originCountry");
    const destinationCountryProps = formik.getFieldProps("destinationCountry");
    const deliveryMethodProps = formik.getFieldProps("deliveryMethod");
    const currencyProps = formik.getFieldProps("currency");
    const deliveryCurrencyProps = formik.getFieldProps("deliveryCurrency");
    const amountProps = formik.getFieldProps("amount");
    const receivingAmountProps = formik.getFieldProps("receivingAmount");

    const getDestinationCountry = (data, setFieldValue) => {
        setFieldValue('originCountry', data);
        setFieldValue('destinationCountry',''); 
        payload.tradeOriginatingCountry = data;
        payload.destinationCountry = '';
        payload.transactionType = '';
        moneyTransfer.supportedDestinationCountry(payload.tradeOriginatingCountry)
            .then(response => {
                setdestinationCountries(response.data.data.countries);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getDeliveryMethods = (data, setFieldValue) => {
        setFieldValue('destinationCountry', data);
        payload.destinationCountry = data;
        setFieldValue('deliveryMethod','');
        moneyTransfer.supportedDeliveryMethods(payload.tradeOriginatingCountry,payload.destinationCountry)
        .then(response => {
            setDeliveryMethods(response.data.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const getCurrencies = (data, setFieldValue) => {
        setFieldValue("deliveryMethod", data);
        payload.transactionType = data
        moneyTransfer.supportedCurrencies(payload.tradeOriginatingCountry,payload.destinationCountry,payload.transactionType)
            .then(response => {
                setCurrencies(response.data.data.currencies);
                getDeliveryCurrencies(response.data.data.currencies[0]);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getDeliveryCurrencies = (data, setFieldValue) => {
        if(setFieldValue) setFieldValue("currency", data);
        payload.principalAmountCurrency = data; 
        moneyTransfer.supportedDeliveryCurrencies(payload.tradeOriginatingCountry,payload.destinationCountry,payload.transactionType,payload.principalAmountCurrency)
            .then(response => {
                setDeliveryCurrencies(response.data.data.currencies);
                payload.deriveAmountCurrency = response.data.data.currencies[0];
                callQuote(payload);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const calculator = (data, setFieldValue) => {
        
    };

    const callQuote = (data) => {
        data = JSON. stringify(data);
        moneyTransfer.callQuote(data)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <AnimationRevealPage>
                <MainContent>
                    <Heading>{headingText}</Heading>
                    <FormContainer>
                    <Form onSubmit={formik.handleSubmit}>
                        <Select name="originCountry" {...originCountryProps} onChange={e => getDestinationCountry(e.target.value, formik.setFieldValue)}>
                            <option>Origin Country</option>
                            {originCountries.map(({ iso3Code , common_name}) => <option value={iso3Code} key={common_name}>{common_name}</option>)}
                        </Select>

                        {  
                            destinationCountries.length > 0 &&
                            <Select name="destinationCountry" {...destinationCountryProps} onChange={e => getDeliveryMethods(e.target.value, formik.setFieldValue)}>
                                <option>Destination Country</option>
                                {destinationCountries.map(({ iso3Code , common_name}) => <option value={iso3Code} key={common_name}>{common_name}</option>)}
                            </Select>
                        }

                        {
                            deliveryMethods.length > 0 &&
                            <Select name="deliveryMethod" {...deliveryMethodProps} onChange={e => getCurrencies(e.target.value, formik.setFieldValue)}>
                                <option>Select Delivery Method</option>
                                {deliveryMethods.map(({ name , label}) => <option value={name} key={label}>{label}</option>)}
                            </Select>
                        }   

                        {
                            (currencies.length > 0 && deliveryCurrencies.length > 0) && <>
                            <InputsRow>
                                <InputCurrrency>
                                    <Input id="principalAmount" name="principalAmount" type="text" placeholder="Amount to send"/>
                                </InputCurrrency>
                                
                                <InputAmount>
                                    <Select name="currency" {...currencyProps} onChange={e => getDeliveryCurrencies(e.target.value, formik.setFieldValue)}>
                                        {currencies.map( currency => <option value={currency} key={currency}>{currency}</option>)}
                                    </Select>
                                </InputAmount>
                            </InputsRow>
                            
                            <InputsRow>
                                <InputCurrrency>
                                    <Input id="principalAmount" name="principalAmount" type="text" placeholder="Amount to receive" />
                                </InputCurrrency>

                                <InputAmount>
                                    <Select name="deliveryCurrency" {...deliveryCurrencyProps}>
                                        {deliveryCurrencies.map(deliveryCurrency => <option value={deliveryCurrency} key={deliveryCurrency}>{deliveryCurrency}</option>)}
                                    </Select>
                                </InputAmount>
                            </InputsRow> </>
                        }

                        <StatsRow>
                            <Stats>
                                <StatTitle>
                                    Exchange rate
                                </StatTitle>
                                <StatInfo>
                                    707.13 XOF
                                </StatInfo>
                            </Stats>

                            <Stats>
                                <StatTitle>
                                    Fee
                                </StatTitle>
                                <StatInfo>
                                    0.00 GBP
                                </StatInfo>
                            </Stats>

                            <Stats>
                                <StatTitle>
                                    Total to pay
                                </StatTitle>
                                <StatInfo>
                                    10000.00 GBP
                                </StatInfo>
                            </Stats>
                        </StatsRow>

                        <SubmitButton type="submit">
                            <SubmitButtonIcon className="icon" />
                            <span className="text">{submitButtonText}</span>
                        </SubmitButton>
                    </Form>
                    </FormContainer>
                </MainContent>
        </AnimationRevealPage>)
};