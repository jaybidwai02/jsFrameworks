var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

const html = "<!doctype html><html><head><meta charset='utf-8'></head><body></body></html>";

global.document = jsdom(html, {
  globalize: true,
  console: true,
  useEach: false,
  skipWindowCheck: false,
});
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

