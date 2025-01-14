import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT ||8080;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to busy-cards server!");
})

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.HOST}${PORT}`);
});