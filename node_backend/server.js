import authRoutes from "./views/user.js"
import express from "express"
import cors from "cors"
import { db } from "./db.js"

const app = express()

db.connect( error => {
    if (error) console.log(error)
    else console.log('Polaczono z bazka')
})

app.use(cors())
app.use('/api/auth', authRoutes)

app.listen(5000, () => console.log('Server has started (port 5000)'))