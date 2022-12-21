import authRoutes from "./views/user.js"
import restaurantRoutes from "./views/restaurant.js"
import menuRoutes from "./views/menu.js"
import tableRoutes from "./views/table.js"
import dataRoutes from "./views/data.js"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import { db } from "./db.js"


const app = express()

db.connect( error => {
    if (error) console.log(error)
    else console.log('Polaczono z bazka')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/auth', authRoutes)
app.use('/restaurant', restaurantRoutes)
app.use('/menu', menuRoutes)
app.use('/table', tableRoutes)
app.use('/data', dataRoutes)

app.listen(5000, () => console.log('Server has started (port 5000)'))