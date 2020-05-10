import * as WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Roboto',
    ],
  },
});

async function asyncData() {
  return Promise.resolve('ololo trololo');
}

async function asyncAppend(data: string) {
  await document.body.appendChild(
    document.createTextNode(data)
  );
}

asyncData().then(asyncAppend);
