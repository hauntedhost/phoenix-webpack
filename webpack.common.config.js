var path = require('path');

var DIST_PATH = './priv/static';
var FRONTEND_PATH = './web/static';

module.exports = {
  DEV_SERVER: {
    PORT: '4001',
    PATH: 'dev-assets'
  },
  DIST_PATH: DIST_PATH,
  FRONTEND_PATH: FRONTEND_PATH,
  ENTRY: {
    main: FRONTEND_PATH + '/js/index.js'
  },
};
