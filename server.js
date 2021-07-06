const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const { search, lang } = req.query;
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${search}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  res.status(200).json(data);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
