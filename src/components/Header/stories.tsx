import React from 'react'

import { Meta, Story } from '@storybook/react'

import Header from '.'

type ActivePage = '/'

interface HeaderProps {
    activePage: ActivePage
}

export default {
    title: 'Components/Header',
    component: Header,
    decorators: [Story => <Story />]
} as Meta

const Template: Story<HeaderProps> = args => <Header {...args} />

export const Normal = Template.bind({})

Normal.args = {
    activePage: '/'
}
