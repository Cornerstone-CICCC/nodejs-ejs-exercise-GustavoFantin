import { Router, Request, Response } from "express";

const pageRouter = Router()

pageRouter.get('/', (req: Request, res: Response) => {
    res.status(200).render('index', {
        title: "Home Page"
    })
})

pageRouter.get('/about', (req: Request, res: Response) => {
    res.status(200).render('about', {
        title: "About Us Page"
    })
})

pageRouter.get('/contact', (req: Request, res: Response) => {
    res.status(200).render('contact', {
        title: "Contact Us Page"
    })
})

export default pageRouter
