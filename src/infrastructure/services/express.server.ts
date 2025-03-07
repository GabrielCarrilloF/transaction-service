import express from "express";
import bodyParser from "body-parser";
import { AccountController } from "../controllers/account.controller";

const app = express();
app.use(bodyParser.json());

app.post("/accounts", AccountController.create);

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
