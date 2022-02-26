import React, { useEffect, useRef } from 'react'
import { useClipboard, useDisclosure } from '@chakra-ui/react'
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle
} from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

import * as S from './styles'
import { motion } from 'framer-motion'
import PopoverMessage from 'components/PopoverMessage'

const ContactList: React.FC = () => {
    const { hasCopied: hasDiscordCopy, onCopy: onCopyDiscord } =
        useClipboard('Luiz Pedro#8385')
    const discordButtonRef = useRef<HTMLButtonElement>(null)

    const { isOpen, onClose, onOpen } = useDisclosure()

    useEffect(() => {
        if (hasDiscordCopy) {
            onOpen()
            setTimeout(() => onClose(), 2000)
        }
    }, [hasDiscordCopy])

    const contactVariants = {
        hidden: {
            opacity: 0,
            y: 20
        }
    }
    return (
        <S.Container>
            <li>
                <motion.a
                    variants={contactVariants}
                    initial="hidden"
                    animate={{
                        opacity: [null, 1],
                        y: [null, 0],
                        transition: { duration: 0.5 }
                    }}
                    href="https://github.com/LuizPedroSousa"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>
                        <AiFillGithub />
                    </span>
                </motion.a>
            </li>
            <li>
                <motion.a
                    variants={contactVariants}
                    initial="hidden"
                    animate={{
                        opacity: [null, 1],
                        y: [null, 0],
                        transition: { delay: 0.25, duration: 0.5 }
                    }}
                    href="https://www.linkedin.com/in/luiz-pedro-sousa-lemos-9898051b7/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>
                        <AiFillLinkedin />
                    </span>
                </motion.a>
            </li>
            <li>
                <motion.a
                    variants={contactVariants}
                    initial="hidden"
                    animate={{
                        opacity: [null, 1],
                        y: [null, 0],
                        transition: { delay: 0.25, duration: 0.5 }
                    }}
                    href="https://twitter.com/LuizPedroSousa"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>
                        <AiFillTwitterCircle />
                    </span>
                </motion.a>
            </li>
            <li>
                <PopoverMessage
                    isOpen={isOpen}
                    initialFocusRef={discordButtonRef}
                    title="Luiz Pedro#8385"
                    description="Discord Copiado!!"
                    trigger={
                        <motion.button
                            onClick={onCopyDiscord}
                            variants={contactVariants}
                            initial="hidden"
                            ref={discordButtonRef}
                            animate={{
                                opacity: [null, 1],
                                y: [null, 0],
                                transition: { delay: 0.5, duration: 0.5 }
                            }}
                            name="Copiar discord"
                            type="button"
                        >
                            <span>
                                <FaDiscord />
                            </span>
                        </motion.button>
                    }
                />
            </li>
        </S.Container>
    )
}

export default ContactList
