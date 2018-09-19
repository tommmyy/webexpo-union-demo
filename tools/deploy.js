// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs-extra');
const path = require('path');

const resolvePath = x => path.resolve(__dirname, '../', x);

const wordpressPath = resolvePath('../webexpo-demo/wp-content/themes/twentyfifteen/webexpo-app-theme');

console.log('🚀 Starting deploy to Wordpress 🚀');

console.log('Cleaning old files...');
fs.emptyDirSync(wordpressPath);

console.log('Copying new files...');
fs.copySync(resolvePath('./build/webexpo-app-theme'), wordpressPath);

console.log('🚀 Successfuly done. 🚀');

