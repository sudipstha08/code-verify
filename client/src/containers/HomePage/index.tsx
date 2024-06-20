import { FC } from 'react'
import { Verification } from '@/components'
import styled from 'styled-components'

const MainContainer = styled.main`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .title {
    font-size: 1.5rem;
  }
`

export const HomePage: FC = () => {
  return (
    <MainContainer>
      <h3 className="title">Verification code:</h3>
      <Verification />
    </MainContainer>
  )
}
