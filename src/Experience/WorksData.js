/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const DATA = {
  offline: [
    <>Implemented <b>data layer</b> library for storage layer, with easy adapters to store data across multiple places.</>,
    <>Adopted <b>IndexedDB, Cache API</b> and <b>Service worker</b> to enhance user experience.</>,
    'Making Zoho Mail accessible even when internet if off, using above techniques.'
  ],
  notification: [
    <>Notification System to deliver emails, sync user actions across sessions eliminating long polling methods.</>,
    <>Implemented library which acts as a wrapper over <b>Websocket API</b>, which communicates with server for updates.</>,
    'Prefetching techiniques to predict user actions and prefetch required data to enhance UX experience.'
  ],
  uicomponents: [
    <>Built accessible, reusable UI components which obeys proper <b>ARIA guidelines</b>.</>,
    <>Maintained mono repo setup and with the help of <b>npm ecosytem</b> and <b>lerna</b> managed those packages.</>,
    'Unit testing covered for all components with the help of Jest, Testing libraries.'
  ],
  i18nsystem: [
    <>Implemented custom <b>Webpack, babel plugins</b> which manages the i18n process for many products.</>,
    <>Babel plugin collects all the texts used in product source codes during bundling.</>,
    'Webpack plugin bundles all respective text from all other languages and generates proper webpack modules.'
  ],
  performance: [
    <>Implemented <b>Content caching library</b> to make priority data cached at all times and evict data with less priority frequently.</>,
    <>Conscious in maintaining <b>optimal DOM</b> count to make sure UI is light weight.</>,
    'Used IndexedDB, Caching techniques, CDN to make site faster by 3X'
  ]
};

export default DATA;
