/**
 * DK Finance AI — MD to DOCX Converter
 * Converts any output/*.md file to a professionally styled Word document.
 * Usage: node scripts/convert-to-docx.js <path-to-md-file>
 * Output: same path with .docx extension
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const HTMLtoDOCX = require('html-to-docx');

async function convertToDOCX(mdFilePath) {
  if (!fs.existsSync(mdFilePath)) {
    console.error(`File not found: ${mdFilePath}`);
    process.exit(1);
  }

  const mdContent = fs.readFileSync(mdFilePath, 'utf8');
  const fileName = path.basename(mdFilePath, '.md');
  const outputDir = path.dirname(mdFilePath);
  const docxPath = path.join(outputDir, `${fileName}.docx`);

  // Convert markdown to HTML
  const htmlContent = marked(mdContent);

  // Wrap in styled HTML document
  const styledHTML = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Calibri', sans-serif;
            font-size: 11pt;
            line-height: 1.4;
            color: #1a1a1a;
          }
          h1 {
            font-size: 18pt;
            font-weight: bold;
            color: #1a1a1a;
            border-bottom: 2px solid #1a1a1a;
            padding-bottom: 4pt;
            margin-top: 0;
          }
          h2 {
            font-size: 14pt;
            font-weight: bold;
            color: #1a1a1a;
            margin-top: 16pt;
          }
          h3 {
            font-size: 12pt;
            font-weight: bold;
            color: #333333;
            margin-top: 12pt;
          }
          h4 {
            font-size: 11pt;
            font-weight: bold;
            color: #555555;
            margin-top: 8pt;
          }
          p {
            margin: 6pt 0;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            margin: 10pt 0;
            font-size: 10pt;
          }
          th {
            background-color: #1a1a1a;
            color: #ffffff;
            font-weight: bold;
            padding: 5pt 8pt;
            text-align: left;
            border: 1px solid #cccccc;
          }
          td {
            padding: 4pt 8pt;
            border: 1px solid #cccccc;
            vertical-align: top;
          }
          tr:nth-child(even) td {
            background-color: #f5f5f5;
          }
          strong {
            font-weight: bold;
          }
          em {
            font-style: italic;
            color: #555555;
          }
          code {
            font-family: 'Courier New', monospace;
            font-size: 10pt;
            background-color: #f0f0f0;
            padding: 1pt 3pt;
          }
          ul, ol {
            margin: 6pt 0;
            padding-left: 20pt;
          }
          li {
            margin: 3pt 0;
          }
          hr {
            border: none;
            border-top: 1px solid #cccccc;
            margin: 12pt 0;
          }
          blockquote {
            border-left: 3px solid #cccccc;
            margin: 8pt 0 8pt 16pt;
            padding-left: 8pt;
            color: #555555;
            font-style: italic;
          }
        </style>
      </head>
      <body>${htmlContent}</body>
    </html>
  `;

  // DOCX options — professional layout
  const options = {
    orientation: 'portrait',
    margins: {
      top: 1080,    // ~0.75 inch
      right: 1080,
      bottom: 1080,
      left: 1080,
    },
    title: fileName,
    subject: 'DK Finance AI — Performance Report',
    creator: 'DK Finance AI',
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
    font: 'Calibri',
    fontSize: 22,       // 11pt in half-points
    complexScripts: false,
  };

  const docxBuffer = await HTMLtoDOCX(styledHTML, null, options);
  fs.writeFileSync(docxPath, docxBuffer);

  console.log(`DOCX created: ${docxPath}`);
  return docxPath;
}

// Run if called directly
const mdFile = process.argv[2];
if (!mdFile) {
  console.error('Usage: node scripts/convert-to-docx.js <path-to-md-file>');
  process.exit(1);
}

convertToDOCX(mdFile).catch(err => {
  console.error('Conversion failed:', err.message);
  process.exit(1);
});

module.exports = { convertToDOCX };
