/**
 * This is a naive implementation of deploying to the targeted Wordpress.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs-extra');
const { resolvePath } = require('./utils');

const WORDPRESS_PATH = resolvePath('../webexpo-demo/wp-content/themes/twentyfifteen/webexpo-app-twentyfifteen');

console.log('🚀 Starting a deploy to a Wordpress 🚀');

console.log('Cleaning old files...');
fs.emptyDirSync(WORDPRESS_PATH);

console.log('Copying new files...');
fs.copySync(resolvePath('./build/webexpo-app-twentyfifteen'), WORDPRESS_PATH);

console.log('🚀 Successfuly done. 🚀');

