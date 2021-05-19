import * as React from 'react'
import styled from 'styled-components/macro'

interface Props {
  chatHistory?: any
}

const ChatHistory: React.FC<Props> = ({ chatHistory }) => {
  const messages = chatHistory.map((msg, index) => (
    <p key={index}>{msg.data}</p>
  ))
  return (
    <Div>
      <h2>Chat History</h2>
      {messages}
    </Div>
  )
}

const Div = styled.div`
  background-color: #f7f7f7;
  margin: 0;
  padding: 20px;
  & h2 {
    margin: 0;
    padding: 0;
  }
`

export { ChatHistory }
