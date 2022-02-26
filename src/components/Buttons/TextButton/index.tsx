import { HTMLMotionProps } from 'framer-motion'
import React from 'react'

import * as S from './styles'

interface TextButtonProps extends HTMLMotionProps<'button'> {
    icon?: JSX.Element
    outline?: boolean
}

const TextButton: React.FC<TextButtonProps> = ({
    icon,
    outline = false,
    type,
    children
}) => {
    return (
        <S.Container outline={outline} type={type || 'button'}>
            {icon && <span>{icon}</span>}
            {children}
        </S.Container>
    )
}

export { TextButton }
