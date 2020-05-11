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
  const htmlDivElement: HTMLDivElement = document.createElement('div');
  htmlDivElement.appendChild(document.createTextNode(data));
  await document.querySelector('.excel__content')
                .appendChild(htmlDivElement);
}

asyncData().then(asyncAppend);
