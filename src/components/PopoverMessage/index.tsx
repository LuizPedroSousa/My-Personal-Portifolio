/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { RefObject } from 'react'
import { Popover, PopoverBody, PopoverTrigger } from '@chakra-ui/react'

import * as S from './styles'
import { motion } from 'framer-motion'

interface PopoverMessageProps {
    initialFocusRef: RefObject<any>
    title: string
    isOpen: boolean
    description: string
    trigger: JSX.Element
}

const PopoverMessage: React.FC<PopoverMessageProps> = ({
    initialFocusRef,
    trigger,
    title,
    description,
    isOpen
}) => {
    return (
        <Popover
            initialFocusRef={initialFocusRef}
            closeOnBlur
            enabled
            closeOnEsc
            returnFocusOnClose={false}
            isOpen={isOpen}
            flip={false}
        >
            <PopoverTrigger>{trigger}</PopoverTrigger>
            <S.PopoverContent>
                <S.PopoverArrow />
                <PopoverBody>
                    <motion.span
                        initial={{ opacity: 0, y: 2 }}
                        animate={{ opacity: [null, 1], y: [null, 0] }}
                    >
                        {title}
                    </motion.span>
                    {description}
                </PopoverBody>
            </S.PopoverContent>
        </Popover>
    )
}

export default PopoverMessage
