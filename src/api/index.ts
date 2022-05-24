import express from 'express'

const app = express()

// req middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes

app.get('/', (req, res) => {
	res.send('Hello World')
})

// res middlewares

export default app