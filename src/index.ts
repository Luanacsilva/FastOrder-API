import 'dotenv/config'
import express from "express"
import userRoutes from "./routes/userRouts";

const app = express()

app.use(express.json())

app.use("/api",userRoutes)

app.listen(process.env.PORT,()=>{
  console.log(`Listening port ${process.env.PORT}`);
})