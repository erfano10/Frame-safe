import express from "express";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes"
import albumRoutes from "./routes/albumRoutes"
import profileRoutes from "./routes/profileRoutes"
import photoRoutes from "./routes/photoRoutes"
import purchaseRoutes from "./routes/purchaseRoutes";
import paymentRoutes from "./routes/paymentRoutes";

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

app.use("/api/purchases", purchaseRoutes)

app.use("/api/payments", paymentRoutes);

export default app;