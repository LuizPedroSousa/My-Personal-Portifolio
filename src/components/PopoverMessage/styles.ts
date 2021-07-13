import styled from 'styled-components'
import tw from 'twin.macro'
import { PopoverContent as ChakraPopoverContent } from '@chakra-ui/react'

export const PopoverContent = styled(ChakraPopoverContent).attrs({
    bg: 'bg',
    borderWidth: '1px',
    borderColor: 'gray.800',
    width: 'max',
    zIndex: '10'
})`
    :after,
    :before {
        ${tw`
            p-0.5
            content absolute w-full h-full
            -left-0.5 -top-0.5 box-content
            bg-gradient-to-r rounded-md from-red-500 via-pink-500 to-purple-400
        `};
        z-index: -1;
    }

    ${tw`
        before:(
            filter blur-sm animate-pulse
        )
    `};

    > div:last-of-type {
        ${tw`
            bg-bg rounded-md flex
            items-center justify-center
            w-full flex-col font-bold
            capitalize
        `}
        span {
            ${tw`
                bg-gradient-to-r from-red-500 via-pink-500 to-purple-400
                bg-clip-text text-transparent relative
            `}
        }
    }
`

export const PopoverArrow = styled.span`
    ${tw`
        w-4 h-4 absolute -top-1
        bg-gradient-to-r from-red-500 via-pink-500 to-purple-400
    `}
    z-index: -1;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
`
