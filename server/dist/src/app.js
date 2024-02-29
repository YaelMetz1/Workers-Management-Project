"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const pg_1 = __importDefault(require("pg"));
const user_1 = require("../models/user");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 4000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const db = new pg_1.default.Client({
    user: "postgres",
    host: "localhost",
    database: "borrow_items",
    password: "hgkh2001",
    port: 5432
});
exports.db = db;
db.connect();
// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello World!');
// });
app.post("/api/checkUserExists", (req, res) => {
    (0, user_1.checkUserExists)(req, res);
});
app.post("/api/users", (req, res) => {
    (0, user_1.postUser)(req, res);
});
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
//# sourceMappingURL=app.js.map