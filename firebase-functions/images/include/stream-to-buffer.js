export const streamToBuffer = async (readableStream) => {
  const buffers = []

  // node.js readable streams implement the async iterator protocol
  for await (const data of readableStream) {
    buffers.push(data)
  }

  return Buffer.concat(buffers)
}
