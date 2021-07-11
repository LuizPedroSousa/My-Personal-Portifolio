import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`w-full mx-auto`}
    height: 100vh;
    max-width: 94%;

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 1110px;
    }
`
