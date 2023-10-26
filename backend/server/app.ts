import express from "express";
import { tRPCExpressMiddleware } from "@fungi/api";

const cors = require("cors")


const app = express();
app.use(cors())

app.use("/trpc", tRPCExpressMiddleware);

app.listen(4000, () => console.log("Listening"));
