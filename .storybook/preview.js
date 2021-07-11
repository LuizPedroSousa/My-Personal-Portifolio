import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from 'styles/global'
import ThemeProvider from 'contexts/themes/provider'


addDecorator(withNextRouter())

export const decorators = [
  (Story, context) => (
    <ThemeProvider>
        <GlobalStyles />
        <Story />
    </ThemeProvider>
  )
]