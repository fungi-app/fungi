import express from "express";
import { mw } from "@/trpc/middleware";

const app = express();

app.use("/trpc", mw);

app.listen(3000, () => console.log("Listening"));
