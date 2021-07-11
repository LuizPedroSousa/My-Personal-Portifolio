import React from 'react'
import Seo from 'components/Seo'

import { Container } from 'styles/pages/home'
import DefaultLayout from 'components/Layouts/DefaultLayout'
import Header from 'components/Header'
export default function Home() {
    return (
        <DefaultLayout>
            <Seo title="Home" description="" thumb="" />
            <main>
                <Container>
                    <Header activePage="/" />
                </Container>
            </main>
        </DefaultLayout>
    )
}
