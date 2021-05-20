import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { connect, sendMsg } from '../../../utils/socket'
import { ChatHistory, InputField, Button } from '../../components'

interface Props {}

export function ChatPage(props: Props) {
  const [chatHistory, setChatHistory] = useState<any>([])
  const [inputMsg, setInputMsg] = useState<string>('')

  useEffect(() => {
    connect(msg => setChatHistory([...chatHistory, msg]))
  }, [chatHistory])

  const handleSendMsg = async () => {
    if (inputMsg === '') return
    sendMsg(inputMsg)
    setInputMsg('')
  }

  const handleInputChange = e => {
    setInputMsg(e.target.value)
  }

  return (
    <Div>
      <div>
        <ChatHistory chatHistory={chatHistory} />
        <Message>
          <InputField
            value={inputMsg}
            onChange={handleInputChange}
            onPressEnter={handleSendMsg}
          />
          <Button onClick={handleSendMsg} htmlType="submit">
            Send
          </Button>
        </Message>
      </div>
    </Div>
  )
}

const Div = styled.div``

const Message = styled.div`
  display: flex;
  gap: 5px;
`
