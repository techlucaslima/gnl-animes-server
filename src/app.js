import express from "express";
import animesRoutes from "./routes/animesRoutes.js";
import dotenv from "dotenv";
import cors from "cors"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://gnl-animes.up.railway.app'],
  credentials: false
}));

app.use("/animes", animesRoutes);

app.listen(PORT, () =>{
  console.log("Server running on http://localhost:3000");
});

