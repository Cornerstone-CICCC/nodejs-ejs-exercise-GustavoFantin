"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
pageRouter.get('/', (req, res) => {
    res.status(200).render('index', {
        title: "Home Page"
    });
});
pageRouter.get('/about', (req, res) => {
    res.status(200).render('about', {
        title: "About Us Page"
    });
});
pageRouter.get('/contact', (req, res) => {
    res.status(200).render('contact', {
        title: "Contact Us Page"
    });
});
exports.default = pageRouter;
