import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from '@chakra-ui/react'
import Hamburger from 'components/AnimatedSvgs/Hamburger'
import * as S from './styles'
import { motion } from 'framer-motion'

type PageLink = {
    href: string
    label: string
    motionDelay: number
}

type ActivePage = '/' | '/AboutMe' | '/AboutMe' | '/Project' | '/Contact'

interface HeaderProps {
    activePage: ActivePage
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    const pageLinks: PageLink[] = [
        { href: '/', label: 'Home', motionDelay: 0 },
        { href: '/about-me', label: 'Sobre Mim', motionDelay: 0.2 },
        { href: '/projects', label: 'Projetos', motionDelay: 0.5 },
        { href: '/contact', label: 'Contato', motionDelay: 0.8 }
    ]

    const devRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const textToInsert = 'Luiz Pedro'.split('')
        textToInsert.forEach((letter, i) => {
            setTimeout(() => {
                devRef.current.textContent += letter
            }, 250 * i)
        })
    }, [])
    return (
        <S.Container>
            <nav>
                <S.DevName>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                            opacity: [null, 1],
                            y: [null, 0],
                            transition: { duration: 0.5 }
                        }}
                    >
                        {'<'}
                    </motion.span>
                    <motion.h2
                        ref={devRef}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                            opacity: [null, 1],
                            y: [null, 0],
                            transition: { duration: 0.5, delay: 0.5 }
                        }}
                    ></motion.h2>
                    <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{
                            opacity: [null, 1],
                            y: [null, 0],
                            transition: { duration: 0.5, delay: 2.5 }
                        }}
                    >
                        {'/>'}
                    </motion.span>
                </S.DevName>

                <S.HamburgerButton
                    onClick={onOpen}
                    whileHover={{ scale: [1, 0.9, 0.98, 0.9] }}
                    whileTap={{ scale: [1, 0.9, 0.98, 0.8] }}
                    type="button"
                >
                    <Hamburger />
                </S.HamburgerButton>
                <Drawer
                    isOpen={isOpen}
                    placement="bottom"
                    isFullHeight
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <S.DrawerContent>
                        <DrawerHeader>
                            <S.ExitButton
                                whileHover={{
                                    scale: [1, 0.9, 0.91, 0.9]
                                }}
                                onClick={onClose}
                            >
                                <AiOutlineClose />
                            </S.ExitButton>
                        </DrawerHeader>

                        <DrawerBody>
                            <ul>
                                {pageLinks.map(
                                    ({ href, label, motionDelay }, i) => (
                                        <S.ListLinksMobal
                                            isActivePage={href === activePage}
                                            whileHover={{
                                                scale: [1, 0.9, 0.91, 0.9],
                                                x: -20
                                            }}
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{
                                                opacity: [null, 1],
                                                y: [null, 0],
                                                transition: {
                                                    delay: motionDelay,
                                                    duration: 0.6
                                                }
                                            }}
                                            key={href + label + i}
                                        >
                                            <Link href={href}>
                                                <a>{label}</a>
                                            </Link>
                                        </S.ListLinksMobal>
                                    )
                                )}
                            </ul>
                        </DrawerBody>
                    </S.DrawerContent>
                </Drawer>
                <ul>
                    {pageLinks.map(({ href, label, motionDelay }, i) => (
                        <S.ListLinksDesktop
                            isActivePage={href === activePage}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{
                                opacity: [null, 1],
                                y: [null, 0],
                                transition: {
                                    delay: motionDelay,
                                    duration: 0.6
                                }
                            }}
                            key={href + label + i}
                        >
                            <a href={href}>{label}</a>
                        </S.ListLinksDesktop>
                    ))}
                </ul>
            </nav>
        </S.Container>
    )
}

export default Header
