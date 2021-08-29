import React, { ReactElement } from 'react'

import { render, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import ThemeProvider from 'contexts/themes/provider'

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'queries'>
) => render(<ThemeProvider>{ui}</ThemeProvider>, options)

export * from '@testing-library/react'
export { customRender as render }
