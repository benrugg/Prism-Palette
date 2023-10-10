import { onRequest } from 'firebase-functions/v2/https'

export const test = onRequest(async (req, res) => {
  res.send('Hello World!')
})
