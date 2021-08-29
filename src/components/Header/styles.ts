import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

import { DrawerContent as ChakraDrawerContent } from '@chakra-ui/react'

interface ListLinksDesktopProps {
    isActivePage: boolean
}

interface ListLinksMobalProps {
    isActivePage: boolean
}

export const Container = styled.header`
    ${tw`w-full h-16 mx-auto`}
    nav {
        ${tw`
            flex items-center justify-between w-full
            h-full
        `}
    }

    ul {
        ${tw`hidden l:(flex justify-between items-center w-96)`}
    }

    max-width: 94%;

    @media ${({ theme: { bp } }) => bp.l} {
        height: 6.25rem;
        max-width: 1110px;
    }
`

export const DevName = styled.div`
    ${tw`flex items-center justify-center`}
    h2 {
        ${tw`
            font-sans font-bold text-lg
            mx-1
            text-white sm:text-xl relative
        `}
    }
    span {
        ${tw`
            bg-gradient-to-r from-pink-600 via-red-500 to-pink-400
            bg-clip-text
            text-transparent uppercase text-2xl
            font-bold font-lato
        `}
        :first-of-type {
            ${tw`text-4xl from-pink-600 via-red-500 to-pink-400`}
        }
        :last-of-type {
            ${tw`text-2xl -right-8`}
        }
    }
`

export const HamburgerButton = styled(motion.button)`
    ${tw`
        w-6 h-6 flex items-center
        transition-opacity duration-300
        justify-center
        relative after:(content transition-all duration-500 w-0 h-0.5 absolute -bottom-2 mix-blend-hard-light)
        focus:(after:(bg-red-500 w-full animate-pulse))
        hover:(opacity-70 after:(w-full animate-pulse bg-pink-500))
        l:hidden
    `}
`

export const DrawerContent = styled(ChakraDrawerContent).attrs({
    bg: 'bg'
})`
    > div {
        ul {
            ${tw`
                flex flex-col items-center justify-center
                w-full max-w-md mx-auto md:max-w-lg
            `}
            height: max-content;
        }
    }
`

export const ExitButton = styled(motion.button)`
    ${tw`
        text-pink-500 border-2 border-pink-500
        rounded-md hover:(border-pink-300 text-white bg-pink-500)
         w-8 ml-auto h-8 flex items-center justify-center
         focus:(border-0 ring-2 ring-pink-200)
    `}
`

export const ListLinksMobal = styled(motion.li)<ListLinksMobalProps>`
    ${tw`w-full h-14 relative`}
    ${({ isActivePage }) =>
        isActivePage &&
        tw`
        after:(content absolute rounded-full  bg-blue-500)
    `}
        ${({ isActivePage }) =>
        isActivePage &&
        `
            :after{
                width: 8px;
                height: 8px;
                left: 38%;
                top: 48%;
                transform: translateY(-50%);
            }
        `}

    a {
        :after,
        :before {
            ${tw`
                content transition-all duration-700 absolute bottom-0 h-0.5 w-full
            `}
        }
        ${tw`
            w-full h-full flex duration-700
            items-center justify-center font-sans font-bold
            text-base relative
            before:(bg-pink-100)
            after:(right-0 transition-all w-0 bg-gradient-to-r from-pink-600 via-red-500 to-pink-400)
            hover:(text-pink-500 before:(duration-1000 bg-gradient-to-r from-pink-800 via-red-500 to-pink-400))
        `}

        ${({ isActivePage }) =>
            isActivePage && tw`text-red-500 before:(bg-red-500)`}
        :hover:after {
            width: 80%;
        }
    }
    :nth-of-type(2),
    :nth-of-type(4) {
        a {
            ${tw`
                after:(left-0 right-auto mx-auto bg-red-500)
                hover:(text-red-500 before:(bg-red-400))
            `}
        }
    }
`
export const ListLinksDesktop = styled(motion.li)<ListLinksDesktopProps>`
    ${tw`w-max`}
    a {
        ${tw`
            text-white font-sans font-bold text-base
            relative transition-colors duration-500
            before:(bg-gradient-to-r from-pink-600 via-red-500 to-pink-400)
            after:(bg-gradient-to-r from-pink-600 via-red-500 to-pink-400)
            hover:(text-gray-400 before:(w-full delay-100))
        `}
        :before,:after {
            ${tw`
                content transition-all duration-500 absolute right-0 -bottom-1 h-0.5 w-0
            `}
        }
        :hover:after {
            width: 80%;
        }
        ${({ isActivePage }) =>
            isActivePage &&
            tw`
            text-red-500 hover:(text-red-600 before:(right-0 delay-100 bg-red-600 bg-blend-luminosity))
            hover:(after:(right-0 bg-red-500))
        `};
    }
`
