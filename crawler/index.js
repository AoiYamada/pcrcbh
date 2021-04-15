const fs = require("fs");
const path = require("path");

const axios = require("axios");
const puppeteer = require("puppeteer-core");

const pcrCharactersInfo = require("./pcrCharactersInfo");

const LOCAL_CHROME_INSTALLED_PATH = "/usr/bin/google-chrome";
const DOWNLOAD_FOLDER_URI = "https://pcredivewiki.tw/static/images/unit/";
const SKIP_INDEX = DOWNLOAD_FOLDER_URI.length;
const EXTENSION_LENGTH = ".png".length;
const PREFIX_LENGTH = "icon_unit_".length;

// axios README example
// GET request for remote image in node.js
// axios({
//   method: 'get',
//   url: 'http://bit.ly/2mTM3nY',
//   responseType: 'stream'
// })
//   .then(function (response) {
//     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   });

const client = axios.create({
  baseURL: DOWNLOAD_FOLDER_URI,
  timeout: 1000,
  responseType: "stream",
});

class Downloader {
  constructor(client) {
    this.client = client;
  }

  async get(filename) {
    const filePath = path.resolve(__dirname, "images", filename);
    const writer = fs.createWriteStream(filePath);

    const { data } = await this.client.get(filename);
    data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  }
}

const downloader = new Downloader(client);

(async () => {
  console.log("Creating Browser...");
  const browser = await puppeteer.launch({
    executablePath: LOCAL_CHROME_INSTALLED_PATH,
    headless: true,
  });

  console.log("Getting Page...");
  const [page] = await browser.pages();

  // 蘭德索爾圖書館
  console.log("Going to 蘭德索爾圖書館...");
  await page.goto("https://pcredivewiki.tw/Character");

  console.log("Evaluating Page Contents...");
  const characterInfos = await page.evaluate((skip) => {
    const $cardsMap = document.querySelectorAll(".card-deck > .card");

    return Object.values($cardsMap).map(($card) => {
      const { 0: $img, 1: $text } = $card.children;

      return [$img.src.slice(skip), $text.firstChild.innerText];
    });
  }, SKIP_INDEX);

  console.log("Closing Browser...");
  await browser.close();

  console.log("Processing Character Infos...");

  await Promise.all(
    characterInfos.map(async ([filename, character]) => {
      console.log(`Processing ${character}`);
      // icon_unit_100931
      const characterId = filename.slice(PREFIX_LENGTH, -EXTENSION_LENGTH);

      if (pcrCharactersInfo[characterId]) {
        return;
      }

      await downloader.get(filename);

      console.log(`${character}[${characterId}] processed!`);
      pcrCharactersInfo[characterId] = {
        id: characterId,
        name: character,
        icon: filename,
        nicknames: [],
      };
    })
  );

  console.log("Saving Processed Character Infos...");
  await fs.promises.writeFile(
    path.resolve(__dirname, "pcrCharactersInfo.json"),
    JSON.stringify(pcrCharactersInfo)
  );

  console.log("Done, Bye~");
})();
