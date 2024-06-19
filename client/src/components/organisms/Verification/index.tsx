import { ChangeEvent, FC, useState } from 'react'
import styled from 'styled-components'

const Container = styled.main``

export const Verification: FC = () => {
  const [values, setValues] = useState<string[]>(Array(6).fill(''))

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const idx = parseInt(e.target.dataset.id as string)

    setValues(prevValue => {
      const value: string[] = Object.assign([], prevValue)
      value[idx] = e.target.value
      return value
    })
  }

  return (
    <Container>
      {values.map((value, idx) => {
        return (
          <input
            value={value}
            onChange={handleChange}
            data-id={idx}
            key={idx}
          />
        )
      })}
    </Container>
  )
}
