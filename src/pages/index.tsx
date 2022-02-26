import React, { useRef, useEffect } from 'react'
import Seo from 'components/Seo'

import * as S from 'styles/pages/home'
import Image from 'next/image'
import DefaultLayout from 'components/Layouts/DefaultLayout'
import Heading from 'components/Header'
import LineGradient from 'components/AnimatedSvgs/LineGradient'
import { motion } from 'framer-motion'
import ContactList from 'components/ContactList'
import { TextButton } from 'components/Buttons/TextButton'

export default function Home() {
    const introductionDescriptionRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (introductionDescriptionRef?.current?.textContent) {
            return
        }
        const firstDescriptionContent =
            'Sou um desenvolvedor frontend que ama café'

        const secondDescriptionContent = [
            'Sou um desenvolvedor frontend que ama caf',

            'Sou um desenvolvedor frontend que ama ca',

            'Sou um desenvolvedor frontend que ama c',

            'Sou um desenvolvedor frontend que ama'
        ]

        const thirdDescriptionContent =
            ' a vastidão da tecnologia e está sempre buscando ser melhor do que ontem.'

        setTimeout(() => {
            firstDescriptionContent.split('').forEach((letter, i) => {
                setTimeout(() => {
                    introductionDescriptionRef.current.textContent += letter
                }, 75 * i)
            })
        }, 1000)

        setTimeout(() => {
            secondDescriptionContent.forEach((text, i) => {
                setTimeout(() => {
                    introductionDescriptionRef.current.textContent = text
                }, 75 * i)
            })
            return setTimeout(() => {
                thirdDescriptionContent.split('').forEach((letter, i) => {
                    setTimeout(() => {
                        introductionDescriptionRef.current.textContent += letter
                    }, 75 * i)
                })
            }, 1000)
        }, 4500)
    }, [])
    return (
        <DefaultLayout>
            <Seo title="Home" description="" thumb="" />
            <main>
                <Heading activePage="/" />
                <S.Container>
                    <S.IntroductionSection>
                        <S.IntroductionTitle>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: [null, 1], y: [null, 0] }}
                            >
                                Olá!
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: [null, 1],
                                    y: [null, 0],
                                    transition: { delay: 1.5 }
                                }}
                            >
                                Prazer,{' '}
                                <motion.span
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{
                                        x: [null, 0],
                                        opacity: [null, 1],
                                        transition: { delay: 2 }
                                    }}
                                >
                                    Luiz Pedro
                                </motion.span>
                            </motion.h2>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: [null, 1],
                                    y: [null, 0],
                                    transition: { delay: 2 }
                                }}
                            >
                                Desenvolvedor Front-end
                            </motion.h3>
                            <span>
                                <LineGradient pathDelay={2} />
                            </span>
                        </S.IntroductionTitle>
                        <S.IntroductionAvatar
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [null, 1],
                                transition: { delay: 3 }
                            }}
                        >
                            <motion.span
                                initial={{ opacity: 0, x: 50, y: 50 }}
                                animate={{
                                    opacity: [null, 1],
                                    transition: { delay: 3 },
                                    x: [null, 0],
                                    y: [null, 0]
                                }}
                            />
                            <Image
                                src="https://avatars.githubusercontent.com/u/62396753?v=4"
                                alt="Luiz Pedro Avatar"
                                objectFit="cover"
                                width={600}
                                height={600}
                            />
                            <motion.span
                                initial={{ opacity: 0, x: -10, y: 50 }}
                                animate={{
                                    opacity: [null, 1],
                                    transition: { delay: 3 },
                                    x: [null, 0],
                                    y: [null, 0]
                                }}
                            />
                        </S.IntroductionAvatar>
                        <S.IntroductionContact>
                            <p ref={introductionDescriptionRef}></p>
                            <div>
                                <p>Siga-me </p>
                                <ContactList />
                            </div>
                            <div>
                                <TextButton>Faça contato</TextButton>
                                <TextButton outline>Downlaod CV</TextButton>
                            </div>
                        </S.IntroductionContact>
                    </S.IntroductionSection>
                </S.Container>
            </main>
        </DefaultLayout>
    )
}
