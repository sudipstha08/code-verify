import { ChangeEvent, FC, useRef, useState } from 'react'
import styled from 'styled-components'
import { INPUT_LENGTH, KEYBPARD_KEYS } from '@/constants'

const Container = styled.main``

export const Verification: FC = () => {
  const [values, setValues] = useState<string[]>(Array(6).fill(''))
  const itemsRef = useRef<Map<number, HTMLInputElement>>(new Map())

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (values.filter(a => a).length === INPUT_LENGTH || !e.target.value) return
    const idx = parseInt(e.target.dataset.id as string)

    setValues(prevValue => {
      const value: string[] = Object.assign([], prevValue)
      value[idx] = e.target.value
      return value
    })
    scrollToNextInput(idx + 1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!(e.target instanceof HTMLInputElement)) {
      return
    }
    const idx = parseInt(e?.target?.dataset.id as string)
    if (e.key === KEYBPARD_KEYS.BACKSPACE) {
      scrollToNextInput(idx - 1)
      if (!values[idx]) return
      setValues(prevValue => {
        const value: string[] = Object.assign([], prevValue)
        value[idx] = ''
        return value
      })
    }
  }

  function scrollToNextInput(currentIdx: number) {
    if (currentIdx < 0) return
    const map = getMap()
    const node = map.get(currentIdx)
    node?.focus()
  }

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map()
    }
    return itemsRef.current
  }

  return (
    <Container>
      {values.map((value, idx) => {
        return (
          <input
            value={value}
            onChange={handleChange}
            data-id={idx}
            onKeyDown={handleKeyDown}
            key={idx}
            ref={node => {
              const map = getMap()
              if (node) {
                map.set(idx, node)
              } else {
                map.delete(idx)
              }
            }}
          />
        )
      })}
    </Container>
  )
}
