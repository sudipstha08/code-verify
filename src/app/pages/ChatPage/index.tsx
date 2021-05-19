import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { connect, sendMsg } from './socket'

interface Props {}

export function ChatPage(props: Props) {
  useEffect(() => {
    connect()
  }, [])

  const send = () => {
    console.log('hello')
    sendMsg('hello')
  }
  return (
    <Div>
      <div>
        <button onClick={send}>Hit</button>
      </div>
    </Div>
  )
}

const Div = styled.div``
