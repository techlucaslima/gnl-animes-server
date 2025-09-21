import express from "express";
import animesRoutes from "./routes/animesRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/animes", animesRoutes);

app.listen(process.env.PORT, () =>{
  console.log("Server running on http://localhost:3000");
});