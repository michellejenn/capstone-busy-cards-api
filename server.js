import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT ||8080;

import categoryRoutes from "./routes/category-route.js";
import routes from "./routes/business-route.js";

//middleware
app.use(cors());
app.use(express.json());


app.use("/api/", routes);

app.get("/", (req, res) => {
    res.send("Welcome to busy-cards server!");
})

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.HOST}${PORT}`);
});