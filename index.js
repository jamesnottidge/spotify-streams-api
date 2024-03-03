const puppeteer = require("puppeteer");

const Scrape = async (id, type) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  async function waitForResponses() {
    while (outstandingRequests > 0) {
      await page.waitForTimeout(1000); // Wait for 1 second
    }
  }


  // Store captured requests with response data
  const capturedRequests = [];

  let outstandingRequests = 0;

  // Intercept network requests
  await page.setRequestInterception(true);

  // Intercept network requests
  page.on("request", async (req) => {
    // Check if request is JSON and has "queryDances" in URL
    if (
      //   req.resourceType() === "xhr" &&
      //   req.headers()["Content-Type"] === "application/json"
      req
    ) {
      let postData = req.url();
      let params = new URLSearchParams(postData.split("?")[1]); // Parse query parameters
      if (postData) {
        try {
          if (params.get("operationName")?.toString() === "queryAlbumTracks") {
            const requestData = { url: req.url(), headers: req.headers() };
            capturedRequests.push({ request: requestData });
            outstandingRequests++;
          }
        } catch (error) {
          console.log(error);
        }
      }
      req.continue();
    }
  });

  page.on("response", async (response) => {
    try {
      const requestUrl = response.request().url();
      const capturedRequestIndex = capturedRequests.findIndex(
        (req) => req.request.url === requestUrl
      );

      if (capturedRequestIndex !== -1) {
        const responseData = await response.json();
       
        capturedRequests[capturedRequestIndex].response =
          JSON.stringify(responseData);
      }

      outstandingRequests--;
    } catch (error) {
        // console.log(error);
    }
  });

  // Navigate to dances.com and scroll to the bottom
  await page.goto(`https://open.spotify.com/artist/${id}/discography/${type}`, {
    waitUntil: "networkidle0",
  });
 

  async function simulateButtonDown(duration) {
    let startTime = Date.now();
    while (Date.now() - startTime < duration) {
      await new Promise((resolve) => setTimeout(resolve, 10)); // Adjust wait time as needed (e.g., 10 milliseconds)
    }
  }

  const divElements = await page.$$(
    "div.os-viewport-native-scrollbars-overlaid"
  );



  await page.waitForSelector(".fEvxx8vl3zTNWsuC8lpx");
  await page.evaluate(async () => {
    const delay = 3000;
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));
    const count = async () =>
      document.querySelectorAll(".fEvxx8vl3zTNWsuC8lpx").length;
    const scrollDown = async (count) => {
      document
        .querySelectorAll(".fEvxx8vl3zTNWsuC8lpx")[count - 1]
        .scrollIntoView({ behavior:"smooth", block: "end", inline: "end", alignToTop: true});
    };
    let preCount = 0;
    let postCount = 0;
    do {
      preCount = await count();
      await scrollDown(preCount);
      await wait(delay);
      postCount = await count();
    } while (postCount > preCount);
    await wait(delay);
  });

  //   await scrollInfiniteScrollDiv(page);

  await page.screenshot({
    path: "yoursite.png",
    fullPage: true,
  });

  // Optional increased timeout (adjust value as needed)

  await waitForResponses();

  //  Print captured requests and response data
  for (const request of capturedRequests) {
    // console.log(`Filtered request URL: ${request.response}`);

    request.response
      ? JSON.parse(request.response).data.albumUnion.tracks.items.forEach(
          (element) => {
            console.log(element.track.name, element.track.playcount);
          }
        )
      : null;
  }

  // console.log(capturedRequests);

  await browser.close();
};
const SpotifyScraper = async () => {
  const artists = [
    "6qqNVTkY8uBg9cP3Jd7DAH",
    // "3TVXtAsR1Inumwj472S9r4",
  ];

  for (const artist of artists) {
    await Scrape(artist, "album");
    await Scrape(artist, "single");
  }
};

SpotifyScraper();
