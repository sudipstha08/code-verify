import { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const Button: FC<IButton> = ({ label, onClick, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      {label}
    </button>
  )
}
