import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port: number = 5000

app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ status: '200', message: 'Hello World' })
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
