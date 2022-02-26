import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

interface ContainerProps {
    outline: boolean
}

export const Container = styled(motion.button)<ContainerProps>`
    ${tw`
        w-max h-14 rounded-lg text-white
        flex items-center justify-center font-sans font-bold text-base
        px-4
    `};
    ${({ outline }) =>
        outline ? tw`border-2 border-purple-500` : tw`bg-purple-500`};

    span {
        ${tw`mr-2`}
    }
`
