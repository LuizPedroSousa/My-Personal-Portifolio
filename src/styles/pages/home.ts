import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Container = styled.div`
    ${tw`w-full mx-auto mt-10
    `}
    height: 100vh;
    max-width: 94%;

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 1110px;
    }
`

export const IntroductionSection = styled.section`
    ${tw`
        w-full sm:(grid grid-cols-2)
    `}

    @media ${({ theme: { bp } }) => bp.sm} {
        grid-template-rows: max-content max-content;
        grid-template-areas:
            'title avatar'
            'contact avatar';
    }
`
export const IntroductionTitle = styled.div`
    ${tw`
        flex flex-col items-start
        w-full sm:w-max relative
    `}
    height: max-content;
    grid-area: title;
    p {
        ${tw`
            text-gray-500 text-2xl font-medium
        `}
    }
    h2,
    h3 {
        ${tw`font-semibold`}
    }
    h2 {
        ${tw`
            text-3xl text-white font-semibold
            mt-2 sm:(text-3xl mt-3) md-3:text-5xl
        `}
        span {
            background: linear-gradient(
                360deg,
                #ff3297 40%,
                rgba(151, 3, 203, 0.8) 80%
            );
            ${tw`bg-clip-text text-transparent`};
        }
    }
    h3 {
        line-height: 135%;
        font-size: calc(${theme`fontSize.3xl`} - 0.25rem);
        ${tw`xs:text-3xl sm:text-3xl md-3:text-5xl`}
    }
    > span {
        width: 80%;
        ${tw`m-auto mt-3 sm:(max-w-xs absolute -bottom-7)`}
    }

    @media ${({ theme: { bp } }) => bp.md} {
        h3 {
            line-height: 145%;
        }
    }
    @media ${({ theme: { bp } }) => bp.sm} {
        > span {
            right: 50%;
            transform: translateX(50%);
        }
    }
`

export const IntroductionAvatar = styled(motion.div)`
    ${tw`
        w-56 h-56 mt-6  mx-auto
        relative sm:(mr-0 mt-0 ml-auto h-full) md:(w-96 h-96)
        md-3:h-full
    `}
    grid-area: avatar;

    span {
        ${tw`absolute`}
        :first-of-type {
            ${tw`z-10 border-2 rounded-full border-gray-500 -top-5 -left-3`}
            width: 96%;
            height: 96%;
            opacity: 16% !important;
        }
        :last-of-type {
            background-image: radial-gradient(
                ${theme`colors.pink.400`} 1.8px,
                transparent 0
            );
            background-position: 1.5rem 2.5rem;
            background-size: 15px 15px;
            ${tw`
                bottom-0 -left-5 z-10 w-28 h-20
                sm:(-left-9 w-36 h-28 -bottom-2)
                md:(w-40)
            `}
        }
    }

    img {
        ${tw`z-20 rounded-full`}
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 85%;
        span {
            :last-of-type {
                background-position: 4.5rem 3.5rem;
                background-size: 18px 18px;
            }
        }
    }
    @media ${({ theme: { bp } }) => bp['md-3']} {
        width: 70%;
    }
`

export const IntroductionContact = styled.div`
    ${tw`mt-6 sm:mt-0`}
    grid-area: contact;

    p {
        ${tw`
            font-normal text-white text-base
            xs:text-lg
        `};

        line-height: 1.7rem;
        max-width: 29.688rem;
    }
    > p {
        ${tw`
            relative
        `};
    }
    > div {
        p {
            ${tw`text-gray-500`}
        }
        ${tw`flex items-center justify-between mt-4`}
        max-width: 70%;
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        line-height: 1.875rem;
    }
`
