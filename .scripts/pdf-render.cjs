const fs = require('fs');
const html_to_pdf = require('html-pdf-node');

const file = { url: 'http://localhost:3000/' };
const options = {
  // format: 'A4',
  printBackground: true,
};

html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
  fs.writeFileSync('./document.pdf', pdfBuffer);
  console.log('Done');
});