import React from 'react'

import { Meta, Story } from '@storybook/react'

import ContactList from '.'

export default {
    title: 'Components/ContactList',
    component: ContactList,
    decorators: [Story => <Story />]
} as Meta

const Template: Story = args => (
    <div style={{ maxWidth: '10rem' }}>
        <ContactList {...args} />
    </div>
)

export const Normal = Template.bind({})
