import * as React from 'react'
import styled from 'styled-components/macro'
import { Input } from 'antd'

interface Props {
  value?: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void
  onPressEnter?: (event: React.KeyboardEvent<HTMLElement>) => void
}

const InputField = ({
  value,
  placeholder,
  onChange,
  onKeyDown,
  onPressEnter,
}: Props) => {
  return (
    <Div>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onPressEnter={onPressEnter}
      />
    </Div>
  )
}

const Div = styled.div``

export { InputField }
