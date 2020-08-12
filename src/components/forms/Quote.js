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

const AirtimeBrand = tw.div`mx-auto pt-3 flex justify-between items-center`;
const LogoImage = tw.img`w-16 mr-3 rounded`;

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
  amount: "",
  receivingAmount: ""
};

let payload = {
    chargeCategory: "MONEYTRANSFER",
    conversion: false,
    deriveAmount: "1",
    deriveAmountCurrency: "",
    destinationCountry: "",
    inverseCalculation: false,
    principalAmount: "1",
    principalAmountCurrency: "",
    tradeOriginatingCountry: "",
    transactionType: ""
};

let payloadJSON;


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
    const [rate, setRate] = useState("0.00"); 
    const [fee, setFee] = useState(0); 
    const [total, setTotal] = useState(0);
    const [operator, setOperator] = useState("");
    const [operatorLogo, setOperatorLogo] = useState("");
    const [topUpProductList, setTopUpProductList] = useState([]);
    const [showMomo, setShowMomo] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    
    const originCountryProps = formik.getFieldProps("originCountry");
    const destinationCountryProps = formik.getFieldProps("destinationCountry");
    const deliveryMethodProps = formik.getFieldProps("deliveryMethod");
    const currencyProps = formik.getFieldProps("currency");
    const deliveryCurrencyProps = formik.getFieldProps("deliveryCurrency");
    const amountProps = formik.getFieldProps("amount");
    const receivingAmountProps = formik.getFieldProps("receivingAmount");
    const phoneProps = formik.getFieldProps("phone");
    const topUpProps = formik.getFieldProps("topUp");

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
        payload.transactionType = data;
        checkDeliveryMethod(payload.transactionType);
    };

    const checkDeliveryMethod = (deliveryMethod) => {
        if(deliveryMethod == "AIRTIME_TOPUP"){
            setShowPhone(true);
        } else {
            moneyTransfer.supportedCurrencies(payload.tradeOriginatingCountry,payload.destinationCountry,deliveryMethod)
                .then(response => {
                    setCurrencies(response.data.data.currencies);
                    getDeliveryCurrencies(response.data.data.currencies[0]);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    const getDeliveryCurrencies = (data, setFieldValue) => {
        if(setFieldValue) setFieldValue("currency", data);
        payload.principalAmountCurrency = data; 
        moneyTransfer.supportedDeliveryCurrencies(payload.tradeOriginatingCountry,payload.destinationCountry,payload.transactionType,payload.principalAmountCurrency)
            .then(response => {
                setDeliveryCurrencies(response.data.data.currencies);
                payload.deriveAmountCurrency = response.data.data.currencies[0];
                calculator(JSON.stringify(payload));
            })
            .catch(e => {
                console.log(e);
            });
    };

    const topUp = (data, setFieldValue) => {
        setFieldValue("phone", data);
        if(data.length >= 9)
        {   
            moneyTransfer.preTopUp(JSON.stringify({beneficiaryPhone: data.trim(), destinationCountryIso3: payload.destinationCountry, web_agent_from_iso_country: payload.tradeOriginatingCountry, currencyTo:undefined, topUpAmount:undefined}))
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    const calculator = (data, setFieldValue, msg) => {
        if(msg === "sending amount"){
            setFieldValue("amount", data);
            payload.principalAmount = data;
            moneyTransfer.callQuote(JSON.stringify(payload))
                .then(reponse => {
                    formik.setFieldValue("receivingAmount", reponse.data.data.receivingAmount);
                    setRate(reponse.data.data.fxRate);
                    setFee(reponse.data.data.tax);
                    setTotal(reponse.data.data.total_amount);
                })
                .catch(e => {
                    console.log(e);
                });
        }else if (msg === "receiving amount"){
            setFieldValue("receivingAmount", data);
            payload.deriveAmount = data;
            moneyTransfer.callQuote(JSON.stringify(payload))
                .then(reponse => {
                    formik.setFieldValue("amount", reponse.data.data.sendingAmount);
                    setRate(reponse.data.data.fxRate);
                    setFee(reponse.data.data.tax);
                    setTotal(reponse.data.data.total_amount);
                })
                .catch(e => {
                    console.log(e);
                });
        }else if (msg === "receiving currency"){
            setFieldValue("deliveryCurrency", data);
            moneyTransfer.callQuote(JSON.stringify(payload))
                .then(reponse => {
                    formik.setFieldValue("receivingAmount", reponse.data.data.receivingAmount);
                    formik.setFieldValue("amount", reponse.data.data.sendingAmount);
                    setRate(reponse.data.data.fxRate);
                    setFee(reponse.data.data.tax);
                    setTotal(reponse.data.data.total_amount);
                })
                .catch(e => {
                    console.log(e);
                });
        }
        else {
            moneyTransfer.callQuote(JSON.stringify(payload))
                .then(reponse => {
                    formik.setFieldValue("amount", reponse.data.data.sendingAmount);
                    formik.setFieldValue("receivingAmount", reponse.data.data.receivingAmount);
                    setRate(reponse.data.data.fxRate);
                    setFee(reponse.data.data.tax);
                    setTotal(reponse.data.data.total_amount);
                })
                .catch(e => {
                    console.log(e);
                });
        }
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
                            showPhone && <>
                                <Input name="phone" type="text" placeholder="Phone number" {...phoneProps} onChange={e => topUp(e.target.value, formik.setFieldValue)}/>
                                {/*formik.touched.phone && formik.errors.phone ? (<Error>{formik.errors.phone}</Error>): null*/}
                            </>
                        } 

                        {
                            showMomo && <>
                                <AirtimeBrand>
                                    <LogoImage src={operatorLogo} /> `{operator}`
                                </AirtimeBrand>

                                <Select name="topUp" {...topUpProps}>
                                    <option>Select Amount</option>
                                    {topUpProductList.map(topUpProduct => <option value={topUpProduct} key={topUpProduct}>{topUpProduct}</option>)}
                                </Select>
                            </>
                        }

                        {
                            (currencies.length > 0 && deliveryCurrencies.length > 0) && <>
                            <InputsRow>
                                <InputCurrrency>
                                    <Input id="amount" name="amount" type="text" placeholder="Amount to send" autoComplete="off" {...amountProps} onChange={e => calculator(e.target.value, formik.setFieldValue,"sending amount")}/>
                                </InputCurrrency>
                                
                                <InputAmount>
                                    <Select name="currency" {...currencyProps} onChange={e => getDeliveryCurrencies(e.target.value, formik.setFieldValue)}>
                                        {currencies.map( currency => <option value={currency} key={currency}>{currency}</option>)}
                                    </Select>
                                </InputAmount>
                            </InputsRow>
                            
                            <InputsRow>
                                <InputCurrrency>
                                    <Input id="receivingAmount" name="receivingAmount" type="text" placeholder="Amount to receive" autoComplete="off" {...receivingAmountProps} onBlur={e => calculator(e.target.value, formik.setFieldValue, "receiving amount")}/>
                                </InputCurrrency>

                                <InputAmount>
                                    <Select name="deliveryCurrency" {...deliveryCurrencyProps} onChange={e => calculator(e.target.value, formik.setFieldValue,"sending amount")}>
                                        {deliveryCurrencies.map(deliveryCurrency => <option value={deliveryCurrency} key={deliveryCurrency}>{deliveryCurrency}</option>)}
                                    </Select>
                                </InputAmount>
                            </InputsRow> 

                            <StatsRow>
                                <Stats>
                                    <StatTitle>
                                        Exchange rate
                                    </StatTitle>
                                    <StatInfo>
                                        {rate} {payload.deriveAmountCurrency}
                                    </StatInfo>
                                </Stats>

                                <Stats>
                                    <StatTitle>
                                        Fee
                                    </StatTitle>
                                    <StatInfo>
                                        {fee} {payload.deriveAmountCurrency}
                                    </StatInfo>
                                </Stats>

                                <Stats>
                                    <StatTitle>
                                        Total to pay
                                    </StatTitle>
                                    <StatInfo>
                                        {total} {payload.principalAmountCurrency}
                                    </StatInfo>
                                </Stats>
                            </StatsRow>
                            </>
                        }

                        <SubmitButton type="submit">
                            <SubmitButtonIcon className="icon" />
                            <span className="text">{submitButtonText}</span>
                        </SubmitButton>
                    </Form>
                    </FormContainer>
                </MainContent>
        </AnimationRevealPage>)
};