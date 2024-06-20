import { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 1.25rem;
  padding: 0.65rem 4rem;
  border-radius: 5px;
  border: none;
  background-color: darkblue;
  color: #fff;
  cursor: pointer;
`

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const Button: FC<IButton> = ({ label, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {label}
    </StyledButton>
  )
}
