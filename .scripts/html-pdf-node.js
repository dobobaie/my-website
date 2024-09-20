const puppeteer = require('puppeteer');
var Promise = require('bluebird');
const hb = require('handlebars')
const inlineCss = require('inline-css')
module.exports

function scrollPage(scrollDirection) {
  return async (page, { delay = 100, size = 250, stepsLimit = null } = {}) => {
    let lastScrollPosition = await page.evaluate(
      async (pixelsToScroll, delayAfterStep, limit, direction) => {
        let getElementScrollHeight = element => {
          if (!element) return 0
          let { clientHeight, offsetHeight, scrollHeight } = element
          return Math.max(scrollHeight, offsetHeight, clientHeight)
        }

        let initialScrollPosition = window.pageYOffset
        let availableScrollHeight = getElementScrollHeight(document.body)
        let lastPosition = direction === 'bottom' ? 0 : initialScrollPosition

        let scrollFn = resolve => {
          let intervalId = setInterval(() => {
            window.scrollBy(0, direction === 'bottom' ? pixelsToScroll : -pixelsToScroll)
            lastPosition += direction === 'bottom' ? pixelsToScroll : -pixelsToScroll

            if (
              (direction === 'bottom' && lastPosition >= availableScrollHeight) ||
              (direction === 'bottom' &&
                limit !== null &&
                lastPosition >= pixelsToScroll * limit) ||
              (direction === 'top' && lastPosition <= 0) ||
              (direction === 'top' &&
                limit !== null &&
                lastPosition <= initialScrollPosition - pixelsToScroll * limit)
            ) {
              clearInterval(intervalId)
              resolve(lastPosition)
            }
          }, delayAfterStep)
        }

        return new Promise(scrollFn)
      },
      size,
      delay,
      stepsLimit,
      scrollDirection
    )

    return lastScrollPosition
  }
}

async function generatePdf(file, options, callback) {
  // we are using headless mode
  let args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
  ];
  if(options.args) {
    args = options.args;
    delete options.args;
  }

  const browser = await puppeteer.launch({
    args: args
  });

  const page = await browser.newPage();

  if(file.content) {
    data = await inlineCss(file.content, {url:"/"});
    console.log("Compiling the template with handlebars")
    // we have compile our code with handlebars
    const template = hb.compile(data, { strict: true });
    const result = template(data);
    const html = result;

    // We set the page content as the generated html by handlebars
    await page.setContent(html, {
      waitUntil: 'networkidle0', // wait for page to load completely
    });
  } else {
    await page.goto(file.url, {
      waitUntil:[ 'load', 'networkidle0', 'domcontentloaded', 'networkidle2'], // wait for page to load completely
    });
    await page.evaluate(_ => {
      window.scrollTo(0, 0);
    });
    await scrollPage('bottom')(page);
  }

  return Promise.props(page.pdf(options))
    .then(async function(data) {
       await browser.close();

       return Buffer.from(Object.values(data));
    }).asCallback(callback);
}

module.exports.generatePdf = generatePdf;
