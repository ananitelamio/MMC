import React, {useContext, useState} from "react";
import {AppContext} from "../../providers/context";
import {saveToStorage} from "../../helpers/sessionStorage";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-primary-500 rounded-lg relative`
const Content = tw.div`p-10`
const Dropdown = tw.div`inline-block relative`
const Header = tw.div`px-4 rounded inline-flex items-center text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
font-semibold tracking-wide transition duration-300
pb-1 border-b-2 text-primaryOrange-500 border-transparent hocus:text-secondaryBlue-600 cursor-pointer`
const Title = tw.span`mr-1`
const DropdownMenu = tw.ul`absolute text-gray-700 pt-1`

export default () => {
    const {dispatch} = useContext(AppContext);
    const { state } = useContext(AppContext);

	const setLanguage = siteLang => {
		dispatch({type: 'setLang', siteLang});
		saveToStorage('siteLang', siteLang);
    };
    
    const [dropdownShow, setDropdownShow] = useState(false);

    return (
        <Content>
            <Dropdown>
                <Header onClick={() => setDropdownShow(!dropdownShow)}>
                    <Title>{(state.siteLang === 'en-US') ? 'English' : 'Français'}</Title>
                    <svg css={tw`fill-current h-4 w-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </Header>
                {dropdownShow && <DropdownMenu>
                    <li css={tw`rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap`} onClick={() => {setLanguage('en-US');setDropdownShow(!dropdownShow)}}>English</li>
                    <li css={tw`rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap`} onClick={() => {setLanguage('fr-FR');setDropdownShow(!dropdownShow)}}>Français</li>
                </DropdownMenu>}
            </Dropdown>
        </Content>
    );
};