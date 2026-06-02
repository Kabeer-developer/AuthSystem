import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import dns from "dns"
 dns.setServers(["1.1.1.1","8.8.8.8"]);

dotenv.config();
connectDb();

const app = express();
app.use(cors()); 
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Auth API Running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
