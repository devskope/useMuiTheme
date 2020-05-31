import { JSDOM } from 'jsdom';

const { window } = new JSDOM(`
  <!doctype html>
  <html>
    <body>
    </body>
  </html>
`);

const copyProps = (src, target) => {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
};

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);
