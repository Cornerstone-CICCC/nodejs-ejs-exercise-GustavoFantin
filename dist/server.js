"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const page_router_1 = __importDefault(require("./routes/page.router"));
dotenv_1.default.config();
//create server
const app = (0, express_1.default)();
//view for ejs
app.set('view engine', 'EJS');
app.set('views', path_1.default.join(__dirname, '../src/views'));
//Middlewares
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
//Routes
app.use('/', page_router_1.default);
//fallback
app.use((req, res) => {
    res.status(404).send("page not found!");
});
//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runnin on port ${PORT}`);
});
