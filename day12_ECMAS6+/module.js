
// de dung module thi file html phai co type="module" o the script
// module la 1 file js co the import va export cac bien, ham, class, object

import {logger2} from './logger/index.js';
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js';

import * as constants from './constants.js'; // import all constants from constants.js

logger2('test', constants.TYPE_LOG);
console.log(constants);