var jsdom;
var exposedProperties;
// eslint-disable-next-line import/no-extraneous-dependencies
require('babel-register')();
require('react-tap-event-plugin')();
// eslint-disable-next-line import/no-extraneous-dependencies
jsdom = require('jsdom').JSDOM;

exposedProperties = ['window', 'navigator', 'document'];

global.document = new jsdom('');
global.window = new jsdom('').window;

global.navigator = {
    userAgent: 'node.js',
};

global.window.documentRef = document;
