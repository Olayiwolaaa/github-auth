import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(json());

app.listen(8080, () => {});
