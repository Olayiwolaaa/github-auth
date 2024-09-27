import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
// import { json } from "body-parser";
// import session from "express-session";
// import passport from "passport";
// import { Strategy as GitHubStrategy } from "passport-github2";
// import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 2400;
app.listen(port, () => {
    connectDB();
    console.log("Server running on port http://localhost:8080");
});