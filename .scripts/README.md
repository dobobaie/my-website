Add to html-pdf-node/index.ks 

```
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    })
    await new Promise(resolve => setTimeout(resolve, 15000));
```