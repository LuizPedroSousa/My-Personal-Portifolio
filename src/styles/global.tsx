import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
    *{
      ${tw`p-0 m-0 box-border`}
    }

    body {
      ${tw`bg-bg text-sm font-sans font-normal text-gray-400`};
    }

    ul,
    li {
        list-style: none;
    }
    hr {
        border: 0;
    }
    button {
        ${tw`cursor-pointer transition-colors`}
        outline: 0 !important;
    }
    @media (min-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }
`

const GlobalStyles: React.FC = () => {
    return (
        <>
            <CustomStyles />
            <BaseStyles />
        </>
    )
}

export default GlobalStyles
