import express, { Express, Request, Response } from "express";
import pg, { QueryResult } from "pg";
import {checkUserExists, postUser} from "../models/user";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();
const port: number = 4000;

app.use(bodyParser.json());
app.use(cors());


const db: pg.Client = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "borrow_items",
    password: "hgkh2001",
    port: 5432
});

db.connect();




app.post("/api/checkUserExists", (req: Request, res: Response) => {
    checkUserExists(req, res);
});


app.post("/api/users", (req: Request, res: Response) => {
    postUser(req, res);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

export { db };


