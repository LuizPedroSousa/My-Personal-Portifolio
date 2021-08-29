import styled from 'styled-components'
import tw from 'twin.macro'
export const Container = styled.ul`
    ${tw`flex items-center justify-between`}
    li {
        ${tw`w-10 h-10 relative
        before:(filter blur-md animate-pulse duration-200)
        `};

        :focus-within {
            :after,
            :before {
                ${tw`
                    -left-0.5 -top-0.5 w-full h-full opacity-100
                `}
            }
        }

        :after,
        :before {
            ${tw`
                p-0.5
                content absolute w-0 h-0 transition-all
                duration-200 left-1 top-1
                box-content opacity-0
                bg-gradient-to-r rounded-full from-red-500 via-pink-500 to-purple-400
        `};
            z-index: 0;
        }

        & + li {
            ${tw`ml-2`}
        }

        button,
        a {
            ${tw`
                w-full h-full
                flex items-center justify-center
                text-xl bg-gray-500 bg-opacity-5 rounded-full
                transition-colors duration-700 shadow-sm
                relative z-10 bg-gray-900
                hover:(
                    border-2 border-gray-500 border-opacity-75
                    text-purple-500 shadow-md bg-gray-900
                )
                focus:(border-0 text-purple-400  bg-gray-900)
            `};
        }
    }
`
