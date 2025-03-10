import express, { Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv'
import pageRouter from "./routes/page.router";
dotenv.config()


//create server
const app = express()

//view for ejs
app.set('view engine', 'EJS')
app.set('views', path.join(__dirname, '../src/views'))

//Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))


//Routes
app.use('/', pageRouter )

//fallback
app.use((req: Request, res: Response) => {
    res.status(404).send("page not found!")
})


//Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is runnin on port ${PORT}`)
})