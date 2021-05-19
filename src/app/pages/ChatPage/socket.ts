/**
 * WebSocket is the primary interface for connecting to a WebSocket server
 * and then sending and receiving data on the connection
 **/

/**
 * The WebSocket() constructor returns a new WebSocket object.
 */
const socket = new WebSocket('ws://localhost:8080/ws')

let connect: any = cb => {
  console.log('Attempting Connection...')

  /**
   * The WebSocket.onopen property is an EventHandler that is called
   * when the WebSocket connection's readyState changes to 1
   * This indicates that the connection is ready to send and receive data.
   */
  socket.onopen = () => {
    console.log('Successfully Connected')
  }

  /**
   * The event sent by the WebSocket object when a message
   * is received from the server.
   */
  socket.onmessage = msg => {
    console.log(msg)
    cb(msg)
  }

  /**
   * A CloseEvent is sent to clients using WebSockets
   * when the connection is closed
   */
  socket.onclose = event => {
    console.log('Socket Closed Connection: ', event)
  }

  /**
   * The error event is fired when a connection with a WebSocket
   * has been closed due to an erro
   **/
  socket.onerror = error => {
    console.log('Socket Error: ', error)
  }
}

/**
 * send() enqueues the specified data to be transmitted to the server over
 * the WebSocket connection, increasing the value of bufferedAmount
 * by the number of bytes needed to contain the data.
 **/
let sendMsg = msg => {
  console.log('sending msg: ', msg)
  socket.send(msg)
}

export { connect, sendMsg }
