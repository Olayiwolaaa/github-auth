import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import passport from "passport";
import webRoutes from "./routes/web.route.js";


dotenv.config();

const app = express();

app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// app.use(express.json());
app.use("/auth/github", webRoutes); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    connectDB();
    console.log(`Server running on port http://localhost:${port}`);
});