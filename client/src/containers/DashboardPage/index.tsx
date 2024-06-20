import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@/components'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
  p {
    margin-top: 10px;
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
`

export const DashboardPage: FC = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <h1>Profile</h1>
      <p>Successfully verified. Welcome to your Profile</p>
      <Button label="Back" onClick={() => navigate('/')} />
    </Container>
  )
}
