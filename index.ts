import express, { Express } from "express";
import * as dotenv from "dotenv"
const app: Express = express();
dotenv.config();
const PORT: number = process.env.PORT as unknown as number  || 5000;



app.listen(PORT, ()=>{
    console.log(`server up on http://localhost:${PORT}/`)
})