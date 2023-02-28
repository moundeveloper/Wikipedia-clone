const cheerio = require("cheerio");
const axios = require("axios");

const scrapeWiki = async (topic) => {
  const data = await getRawHTML(getUrls(topic).wikipedia);
  const $ = cheerio.load(data);

  const header = $("#firstHeading").text();
  const preContent = getPreContent($);
  const indices = getPageIndices($);
  const startTime = performance.now();
  const content = getOnlyContent($, indices);
  const endTime = performance.now();
  console.log(endTime - startTime);

  return { header, indices, content, preContent };
};

const getOnlyContent = ($, indices) => {
  const raw_result = [];
  if (!indices) return;
  $("[data-mw-deduplicate]").remove();
  $(
    ".mw-headline, h2:has(span.mw-headline) ~ *:not(:has(span.mw-headline,[alt]))"
  ).each(function (i, item) {
    raw_result.push($(this).text());
  });

  return mapTextsToObjects(indices, raw_result);
};

function mapTextsToObjects(titleList, contentList) {
  const contentMap = {};
  let currentTitle = null;
  let currentContent = null;

  // Create a map of titles to their content
  for (const text of contentList) {
    if (titleList.includes(text)) {
      // If this is a title, store the previous content
      if (currentTitle !== null && currentContent !== null) {
        contentMap[currentTitle] = currentContent.trim();
      }
      // Start a new content for this title
      currentTitle = text;
      currentContent = "";
    } else {
      // If this is not a title, add it to the current content
      currentContent += text + " ";
    }
  }

  // Store the last content
  if (currentTitle !== null && currentContent !== null) {
    contentMap[currentTitle] = currentContent.trim();
  }

  // Create an array of objects with the mapped titles and paragraphs
  const result = [];
  for (const title of titleList) {
    const paragraph = title in contentMap ? contentMap[title] : "";
    result.push({ title, paragraph });
  }

  return result;
}

const getImg = async (topic) => {
  const data = await getRawHTML(getUrls(topic).unsplash);
  const raw_result = [];
  const $ = cheerio.load(data);
  $('[data-test="photo-grid-masonry-img"]').each(function (i, item) {
    raw_result.push($(this).attr("src"));
  });

  const randomImg = Math.floor(Math.random() * raw_result.length);

  return { imgUrl: raw_result[randomImg] };
};

const getPreContent = ($) => {
  const raw_result = [];
  $(
    "#mw-content-text .mw-parser-output > p:nth-of-type(-n+2):not(#toc ~ p)"
  ).each(function (i, item) {
    raw_result.push($(this).text());
  });

  // Check if it's empty
  if (!raw_result) return;
  return raw_result;
};

const getContent = ($, indices) => {
  // Get content list
  const raw_result = [];
  $(
    "#mw-content-text #toc ~ p, #mw-content-text #toc ~ h2, #mw-content-text #toc ~ h4, #mw-content-text #toc ~ div, #mw-content-text #toc ~ ul, #mw-content-text #toc ~ div ol, #mw-content-text #toc ~ h3, #mw-content-text #toc ~ img"
  ).each(function (i, item) {
    raw_result.push($(this).text());
  });

  // Check if it's empty
  if (!raw_result) return;

  // Check if indices are empty then set false to all h2
  if (!indices)
    return raw_result.map((item) => {
      return { item: item, h2: false };
    });

  // Check if indices correspond to item in content flag h2 to true

  const result = raw_result.map((item) => {
    const fixedItem = item.substring(
      0,
      item.indexOf("[modifica | modifica wikitesto]")
    );
    if (indices.includes(fixedItem)) {
      return {
        item: item.replace("[modifica | modifica wikitesto]", ""),
        h2: true,
      };
    }
    return {
      item: item,
      h2: false,
    };
  });

  return result;
};

const getPageIndices = ($) => {
  const raw_result = $("#toc").text();
  if (!raw_result) return;
  const result = raw_result
    .split("\n")
    .map((indice) => indice.substring(indice.indexOf(" ") + 1))
    .filter((indice) => indice !== "");
  result.shift();
  return result;
};

const getRawHTML = async (url) => {
  const data = await axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => console.error(error));
  return data;
};

const getUrls = (topic) => {
  return {
    wikipedia: `https://it.wikipedia.org/wiki/${topic}`,
    unsplash: `https://unsplash.com/it/s/foto/${topic}?orientation=landscape`,
  };
};

const wikiSearchResults = async (topic) => {
  const url = `https://it.wikipedia.org/w/api.php?action=opensearch&format=json&search=${topic}`;
  const data = await axios(url).then((response) => response.data[1]);
  return data;
};

module.exports = { scrapeWiki, wikiSearchResults, getImg };
