var path = require('path');

var DIST_PATH = './priv/static/js';
var FRONTEND_PATH = './web/static/js';

module.exports = {
  DEV_SERVER: {
    PORT: '4001',
    PATH: 'dev-assets'
  },
  DIST_PATH: DIST_PATH,
  FRONTEND_PATH: FRONTEND_PATH,
  ENTRY: {
    main: path.join(FRONTEND_PATH, 'index.js')
  },
};
