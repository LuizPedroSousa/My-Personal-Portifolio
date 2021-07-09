import React from 'react'
import GlobalStyles from 'styles/global'
import light from 'styles/themes/light'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'

const ThemeProvider: React.FC = ({ children }) => {
    return (
        <StyledComponentsProvider theme={light}>
            <GlobalStyles />
            {children}
        </StyledComponentsProvider>
    )
}

export default ThemeProvider
