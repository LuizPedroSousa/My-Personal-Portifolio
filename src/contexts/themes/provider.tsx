import React from 'react'
import GlobalStyles from 'styles/global'
import light from 'styles/themes/light'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import customChakraTheme from 'styles/themes/chakra-ui'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'

import {
    ColorModeProvider,
    ThemeProvider as ChakraThemeProvider
} from '@chakra-ui/react'
const ThemeProvider: React.FC = ({ children }) => {
    return (
        <StyledComponentsProvider theme={light}>
            <ChakraThemeProvider theme={customChakraTheme}>
                <ColorModeProvider options={{ initialColorMode: 'dark' }}>
                    <EmotionThemeProvider theme={customChakraTheme}>
                        <GlobalStyles />
                        {children}
                    </EmotionThemeProvider>
                </ColorModeProvider>
            </ChakraThemeProvider>
        </StyledComponentsProvider>
    )
}

export default ThemeProvider
