const path = require('path');

const resolvePath = x => path.resolve(__dirname, '../', x);

module.exports = {
	resolvePath,
};
