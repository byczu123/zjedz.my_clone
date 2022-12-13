import authRoutes from "./views/auth.js"
import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use('/api/auth', authRoutes)

app.listen(5000, () => console.log('Server has started (port 5000)'))