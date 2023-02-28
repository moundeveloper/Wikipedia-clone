const express = require("express");
const {
  scrapeWiki,
  wikiSearchResults,
  getImg,
} = require("./cheerioWebscraper.js");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/api", async (req, res) => {
  res.send(await scrapeWiki(req.query.search_topic));
});

app.get("/api/img", async (req, res) => {
  res.send(await getImg(req.query.search_topic));
});

app.get("/api/search_results", async (req, res) => {
  res.send(await wikiSearchResults(req.query.search_topic));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/api`);
});
