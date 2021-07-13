import React, { RefObject } from 'react'

import { Meta, Story } from '@storybook/react'

import PopoverMessage from '.'

interface PopoverMessageProps {
    initialFocusRef: RefObject<any>
    title: string
    isOpen: boolean
    description: string
    trigger: JSX.Element
}

export default {
    title: 'Components/PopoverMessage',
    component: PopoverMessage,
    decorators: [
        Story => (
            <div style={{ maxWidth: '10rem', marginLeft: '6rem' }}>
                <Story />
            </div>
        )
    ]
} as Meta

const Template: Story<PopoverMessageProps> = args => (
    <PopoverMessage {...args} />
)

export const Normal = Template.bind({})

Normal.args = {
    initialFocusRef: '',
    title: 'Something',
    isOpen: true,
    description: 'Wrong',
    trigger: <button></button>
}
