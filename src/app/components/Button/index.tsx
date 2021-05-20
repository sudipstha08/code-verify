import React, { FC } from 'react'
import { Button } from 'antd'

type ButtonType = 'primary' | 'ghost' | 'dashed' | 'link'
interface Props {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  loading?: boolean
  type?: ButtonType
  disabled?: boolean
  htmlType?: any
}

const CustomButton: FC<Props> = ({
  children,
  onClick,
  loading,
  type,
  disabled,
  htmlType,
}) => {
  return (
    <Button
      onClick={onClick}
      loading={loading}
      type={type}
      disabled={disabled}
      htmlType={htmlType}
    >
      {children}
    </Button>
  )
}

export { CustomButton }
