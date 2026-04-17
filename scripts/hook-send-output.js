const { execSync } = require('child_process');
const path = require('path');

let input = '';
process.stdin.on('data', chunk => (input += chunk));
process.stdin.on('end', () => {
  try {
    const payload = JSON.parse(input);
    const filePath = payload?.tool_input?.file_path || '';
    const normalized = filePath.replace(/\\/g, '/');
    if (normalized.includes('/outputs/') && normalized.endsWith('.md')) {
      const scriptPath = path.join(__dirname, 'send-output.js');
      execSync(`node "${scriptPath}" "${filePath}"`, { stdio: 'inherit' });
    }
  } catch (e) {
    // silent — don't block Claude on hook errors
  }
});
