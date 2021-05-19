import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { connect, sendMsg } from './socket'
import { ChatHistory } from '../../components'

interface Props {}

export function ChatPage(props: Props) {
  const [chatHistory, setChatHistory] = useState<any>([])

  useEffect(() => {
    connect(msg => setChatHistory([...chatHistory, msg]))
  }, [chatHistory])

  const send = () => {
    console.log('hello')
    sendMsg('hello')
  }
  return (
    <Div>
      <div>
        <ChatHistory chatHistory={chatHistory} />
        <button onClick={send}>Hit</button>
      </div>
    </Div>
  )
}

const Div = styled.div``
