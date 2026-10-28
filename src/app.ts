import express from "express";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes"
import albumRoutes from "./routes/albumRoutes"
import profileRoutes from "./routes/profileRoutes"
import photoRoutes from "./routes/photoRoutes"

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("FrameSafe API Running");
});


app.use("/api/users", userRoutes);

app.use("/api/auth",authRoutes)

app.use("/api/albums",albumRoutes)

app.use("/api/profile", profileRoutes)

app.use("/api/photos",photoRoutes)

export default app;