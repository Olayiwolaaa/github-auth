import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// Client ID and Client Secret from environment variables
const clientID = "Ov23liG0bOvTN55E1Iga";
const clientSecret = "c2cd69582a4d86130f9655dc588a689d154bb30c";
// const clientID = process.env.GITHUB_CLIENT_ID;
// const clientSecret = process.env.GITHUB_CLIENT_SECRET;

// Declare the redirect route
app.get("/home", (req, res) => {
    const code = "";
    axios({
      method: "get",
      url: `https://github.com/login/oauth/authorize?client_id=${clientID}`,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        code = response.data.code;
        console.log(code);
      })
      .catch((error) => {
        console.error("Error fetching access token: ", error.message);
        res.status(500).send("Error authenticating with GitHub.");
      });
  // Extract the code from the query parameters
//   const requestToken = req.query.code;

//   axios({
//     method: "post",
//     url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`,
//     headers: {
//       accept: "application/json",
//     },
//   })
//     .then((response) => {
//       const accessToken = response.data.access_token;
//       console.log(response.data);

//       // Redirect the user to the home page with the access token
//       res.redirect(`/home.html?access_token=${accessToken}`);
//     })
//     .catch((error) => {
//       console.error("Error fetching access token: ", error);
//       res.status(500).send("Error authenticating with GitHub.");
//     });
});

app.listen(4000, () => {
  console.log("Server listening on port : 4000");
});
