import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
// import { json } from "body-parser";
import session from "express-session";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log("Server running on port http://localhost:8080");
});


// password
// ELobB2WsuVvA0mTo;