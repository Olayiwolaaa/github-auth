import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Client ID and Client Secret
const clientID = "Ov23liG0bOvTN55E1Iga";
const clientSecret = "c2cd69582a4d86130f9655dc588a689d154bb30c";

// Step 1: GitHub OAuth login route
app.get("/login", (req, res) => {
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=http://localhost:4000/home`;
  res.redirect(redirectUrl);
});

// Step 2: Handle GitHub OAuth callback and exchange code for an access token
app.get("/home", (req, res) => {
  const requestToken = req.query.code;

  axios({
    method: "post",
    url: "https://github.com/login/oauth/access_token",
    headers: {
      accept: "application/json",
    },
    data: {
      client_id: clientID,
      client_secret: clientSecret,
      code: requestToken,
    },
  })
    .then((response) => {
      const accessToken = response.data.access_token;

      if (accessToken) {
        // Instead of redirecting, send a simple message
        res.send(
          `Authentication successful!`
        );
      } else {
        res.status(500).send("Error: Access token not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching access token: ", error.message);
      res.status(500).send("Error authenticating with GitHub.");
    });
});

// Start server on port 4000
app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
