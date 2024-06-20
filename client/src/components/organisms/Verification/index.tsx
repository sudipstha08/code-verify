import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react'
import styled from 'styled-components'
import { INPUT_LENGTH, KEYBPARD_KEYS } from '@/constants'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { Button } from '@/components'
import { userService } from '@/services'

const Container = styled.form``

export const Verification: FC = () => {
  const [inputValues, setInputValues] = useState<string[]>(Array(6).fill(''))
  const inputsRef = useRef<Map<number, HTMLInputElement>>(new Map())

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputValues.filter(a => a).length === INPUT_LENGTH || !e.target.value)
      return

    const idx = parseInt(e.target.dataset.id as string)

    const { value } = e.target
    const clonedInputValues: string[] = Object.assign([], inputValues)

    if (value.length > 1) {
      const splittedValues = value.split('')
      splittedValues.forEach((inputValue, currentIdx) => {
        const cursor = idx + currentIdx
        if (cursor < INPUT_LENGTH) {
          clonedInputValues[cursor] = inputValue
        }
      })
      setInputValues(clonedInputValues)
      return
    }

    setInputValues(() => {
      clonedInputValues[idx] = value
      return clonedInputValues
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
      if (!inputValues[idx]) return
      setInputValues(prevValue => {
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
    if (!inputsRef.current) {
      inputsRef.current = new Map()
    }
    return inputsRef.current
  }

  const sendVerificationCode = useMutation({
    mutationKey: ['sendVerification'],
    mutationFn: userService.verifyCode,
    onSuccess: () => {
      toast.success('Verification code sent successfully')
    },
    onError: () => {
      toast.error(
        'Invalid verification code. Please enter a valid verfication code',
      )
    },
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendVerificationCode.mutate(inputValues.join(''))
  }

  return (
    <Container onSubmit={handleSubmit}>
      {inputValues.map((value, idx) => {
        return (
          <input
            value={value}
            onChange={handleChange}
            data-id={idx}
            onKeyDown={handleKeyDown}
            key={idx}
            pattern="[0-9]*"
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
      <Button label="SUBMIT" type="submit" />
    </Container>
  )
}
