/**
 * DK Finance AI — Output Email Sender
 * Converts a markdown output file to .docx and emails it to the configured recipient.
 * Usage: node scripts/send-output.js <path-to-md-file>
 */

const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const { convertToDOCX } = require('./convert-to-docx');

// Load .env manually (no dotenv dependency)
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) {
    console.error('.env file not found');
    process.exit(1);
  }
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
  });
}

async function sendOutput(mdFilePath) {
  loadEnv();

  const { GMAIL_USER, GMAIL_APP_PASSWORD, GMAIL_TO } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !GMAIL_TO) {
    console.error('Missing required env vars: GMAIL_USER, GMAIL_APP_PASSWORD, GMAIL_TO');
    process.exit(1);
  }

  // Convert .md → .docx
  console.log(`Converting ${mdFilePath} to .docx...`);
  const docxPath = await convertToDOCX(mdFilePath);

  const fileName = path.basename(docxPath);
  const reportName = path.basename(mdFilePath, '.md');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD.replace(/\s/g, ''),
    },
  });

  await transporter.sendMail({
    from: `"DK Finance AI" <${GMAIL_USER}>`,
    to: GMAIL_TO,
    subject: `DK Finance AI — ${reportName}`,
    text: `Please find attached the latest output: ${reportName}.`,
    attachments: [
      {
        filename: fileName,
        path: docxPath,
      },
    ],
  });

  console.log(`Sent ${fileName} to ${GMAIL_TO}`);
}

const mdFile = process.argv[2];
if (!mdFile) {
  console.error('Usage: node scripts/send-output.js <path-to-md-file>');
  process.exit(1);
}

sendOutput(mdFile).catch(err => {
  console.error('Failed:', err.message);
  process.exit(1);
});
