import app from '../api'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.API_PORT || 3001

app.listen(port)
console.log(`Api rodando na porta ${port}`)
