import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "../src/routes/UserRoutes";
import adminRoutes from "../src/routes/AdminRoutes";

const app: Express = express();
const port: number = 4000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
