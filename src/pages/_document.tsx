import React from 'react'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentProps,
    DocumentInitialProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document<DocumentProps> {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta charSet="UTF-8" />
                    <link
                        rel="shortcut icon"
                        href="/favicon.png"
                        type="image/png-icon"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
