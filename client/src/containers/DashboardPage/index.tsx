import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
  p {
    margin-top: 10px;
    font-size: 1.25rem;
  }
`

export const DashboardPage: FC = () => {
  return (
    <Container>
      <h1>Profile</h1>
      <p>Successfully verified. Welcome to your Profile</p>
    </Container>
  )
}
