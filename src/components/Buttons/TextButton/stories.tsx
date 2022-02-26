import React from 'react'

import { Meta, Story } from '@storybook/react'

import { TextButton } from '.'
import { HTMLMotionProps } from 'framer-motion'
import { AiFillTwitterCircle } from 'react-icons/ai'

interface TextButtonProps extends HTMLMotionProps<'button'> {
    icon?: JSX.Element
    outline: boolean
}

export default {
    title: 'Components/TextButton',
    component: TextButton,
    decorators: [Story => <Story />]
} as Meta

const Template: Story<TextButtonProps> = args => (
    <div style={{ maxWidth: '10rem' }}>
        <TextButton {...args}>Contact</TextButton>
    </div>
)

export const Normal = Template.bind({})

Normal.args = {
    icon: <AiFillTwitterCircle />
}
